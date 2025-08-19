using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Voice.Server.Controllers
{
    using Voice.Server.Services;
    using Microsoft.AspNetCore.SignalR.Protocol;
    using Voice.Server.Model;

    [Route("api/[controller]")]
    [ApiController]

    public class MessageController : ControllerBase    
    {
        readonly MessageService _userService;
        
        public MessageController(MessageService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult PostMessage([FromBody] Model message)
        {
            string messageList = _userService.AddMessage(message.Message);
            return Ok(messageList);
        }
    }
}

