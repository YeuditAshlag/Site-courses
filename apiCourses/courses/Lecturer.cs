namespace courses
{
    public class Lecturer
    {
        static int index = 0;
        public int codeLecturer { get; set; }
        public string nameLecturer { get; set; }
        public string address { get; set; }
        public string email { get; set; }
        public string password { get; set; }

        public Lecturer(string nameLecturer, string address, string email, string password)
        {
            codeLecturer = index++;
            this.nameLecturer = nameLecturer;
            this.address = address;
            this.email = email;
            this.password = password;
        }

    }
}
