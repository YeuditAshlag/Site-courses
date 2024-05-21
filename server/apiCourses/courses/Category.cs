namespace courses
{
    public class Category
    {
        static int index = 0;
        public int codeCategory { get; set; }
        public string nameCategory { get; set; }
        public string icon { get; set; }
        public Category(string name, string iconRouting)
        {
            codeCategory = index++;
            nameCategory = name;
            icon = iconRouting;
        }
        public Category()
        {

        }


    }
}
