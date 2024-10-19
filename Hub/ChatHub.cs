using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Authorization;

[Authorize]
public class ChatHub : Hub
{
    public async Task SendMessage(string receiver, string message)
    {
        var sender = Context.User.Identity.Name;
        if (!string.IsNullOrEmpty(sender))
        {
            // Send the message to the selected recipient
            await Clients.User(receiver).SendAsync("ReceiveMessage", sender, message);
        }
    }
}
