using System.ComponentModel.DataAnnotations;

namespace FirstChatApp.Models
{
    public class History
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
