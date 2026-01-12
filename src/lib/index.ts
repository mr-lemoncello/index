export async function fetchDiscordStatus(fetchFn: typeof fetch) {
  try {
    const response = await fetchFn(
      'https://api.lanyard.rest/v1/users/1250607214180438016'
    );
    const data = await response.json();

    return {
      discordUserState: data?.data?.activities?.[0]?.state ?? "offline :3"
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      discordUserState: null
    };
  }
}