namespace courses
{
    public enum wayOfLearn { zoom = 0, frontal=1 };
    public class Course
    {
        static int index = 0;
        public int codeCourse { get; set; }
        public string namecourse { get; set; }
        public int categoryId { get; set; }
        public int accountLessons { get; set; }
        public string dateStart { get; set; }
        public string[] Syllabus { get; set; }
        public wayOfLearn wayOfLearning { get; set; }
        public int lecturerId { get; set; }
        public string imageUrl { get; set; }

        public Course(string namecourse,  int categoryId, int accountLessons, string dateStart, string[] Syllabus, wayOfLearn wayOfLearning, int lecturerId, string imageUrl)
        {
            codeCourse = index++;
            this.namecourse = namecourse;
            this.categoryId = categoryId;
            this.accountLessons = accountLessons;
            this.dateStart = dateStart;
            this.Syllabus = Syllabus;
            this.wayOfLearning = wayOfLearning;
            this.lecturerId = lecturerId;
            this.imageUrl = imageUrl;

        }
        public Course() { }


    }
}
