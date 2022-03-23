const SUPABASE_URL = 'https://piaaxjtzsxubseeoqown.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpYWF4anR6c3h1YnNlZW9xb3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5ODgwOTMsImV4cCI6MTk2MzU2NDA5M30.-JF8rp3uujkLpMpiJj70fwmuyamVh64NHTUYK5UFA04';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllCharacters() {
    const response = await client
        .from('MetalGearSolid')
        .select();

    return checkError(response);  
}

export async function getCharacter(id) {
    // console.log(id);
    const response = await client
        .from('MetalGearSolid')
        .select()
        .match({ id: id })
        .single();

    return checkError(response);  
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}