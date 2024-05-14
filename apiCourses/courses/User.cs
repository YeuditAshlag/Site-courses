namespace courses
{
    public class User
    {
        static int index = 0;
        public int codeUser { get; set; } 
        public string nameUser { get; set; }
        public string address { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public bool IsLecturer { get; set; }
        public string? CourseName { get; set; }


        public User(string nameUser, string address, string email, string password, bool IsLecturer, string CourseName)
        {
            codeUser = index++;
            this.nameUser = nameUser;
            this.address = address;
            this.email = email;
            this.password = password;
            this.IsLecturer = IsLecturer;
            this.CourseName = CourseName;
        }
        public User()
        {

        }

    }
}
