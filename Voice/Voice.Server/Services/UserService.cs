using System.Text.Json;

namespace Voice.Server.Services
{
    public interface IAddMessage
    {
        string AddMessage (string message);
    }

    public class MessageService : IAddMessage
    {
        List<string> messageList = new List<string>();
        public string AddMessage(string message)
        {
            messageList.Add(message);
            string messageJson = JsonSerializer.Serialize(messageList);
            return messageJson;
        }
    }
}
