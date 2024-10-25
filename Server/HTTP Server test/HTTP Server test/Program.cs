using System.Reflection;

namespace HTTP_Server {

    static class Program
    {
        public static string path =  Path.Combine(Assembly.GetExecutingAssembly().Location,"..", "Data", "People.db");

        public static List<PersonData> people = new List<PersonData>();
        static void Main()
        {
            if (File.Exists(Program.path))
            {
                List<byte[]> byteData = Serializer.SerializeFromFile<List<byte[]>>(Program.path).ToList();
                foreach (byte[] bytes in byteData)
                    people.Add(Serializer.ConvertBytesToObject<PersonData>(bytes));
            }
            Task.Run(() => { new Listener(); });
            while (true)
            {
                Console.ReadLine();
            }
        }
    }
}