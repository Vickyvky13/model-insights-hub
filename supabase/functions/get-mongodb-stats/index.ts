import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const mongoUri = Deno.env.get('MONGODB_URI');
    
    if (!mongoUri) {
      throw new Error('MONGODB_URI not configured');
    }

    console.log('Connecting to MongoDB...');
    const client = new MongoClient();
    await client.connect(mongoUri);
    
    const db = client.database("Cluster0");
    
    // Get counts from each collection
    const [chatsCount, usersCount, rankingCount] = await Promise.all([
      db.collection("Chats_DB").countDocuments({}),
      db.collection("User_DB").countDocuments({}),
      db.collection("user_ranking").countDocuments({}),
    ]);

    console.log('Stats fetched:', { chatsCount, usersCount, rankingCount });

    await client.close();

    return new Response(
      JSON.stringify({
        chats: chatsCount,
        users: usersCount,
        rankings: rankingCount,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching MongoDB stats:', errorMessage);
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        // Return fallback data on error
        chats: 0,
        users: 0,
        rankings: 0,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
