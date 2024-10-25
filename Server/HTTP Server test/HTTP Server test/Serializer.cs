using Newtonsoft.Json.Bson;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HTTP_Server
{
    public static class Serializer
    {
        private static JsonSerializerSettings DefaultSettings => new JsonSerializerSettings() { TypeNameHandling = TypeNameHandling.None };

        private static JsonSerializerSettings IndentedSettings => new JsonSerializerSettings()
        {
            TypeNameHandling = TypeNameHandling.None,
            Formatting = Formatting.Indented
        };

        //Serialize from and to byte array

        public static byte[] ConvertObjectToBytes(object toConvert)
        {
            JsonSerializer serializer = JsonSerializer.Create(DefaultSettings);
            MemoryStream memoryStream = new MemoryStream();

            using (BsonWriter writer = new BsonWriter(memoryStream))
            {
                serializer.Serialize(writer, toConvert);
            }

            return memoryStream.ToArray();
        }

        public static T ConvertBytesToObject<T>(byte[] bytes)
        {

            JsonSerializer serializer = JsonSerializer.Create(DefaultSettings);
            MemoryStream memoryStream = new MemoryStream(bytes);

            using (BsonReader reader = new BsonReader(memoryStream))
            {
                return serializer.Deserialize<T>(reader);
            }
        }

        public static string SerializeToString(object serializable) { return JsonConvert.SerializeObject(serializable, DefaultSettings); }

        public static T SerializeFromString<T>(string serializable) { return JsonConvert.DeserializeObject<T>(serializable, DefaultSettings); }

        public static void SerializeToFile(string path, object serializable) { File.WriteAllText(path, JsonConvert.SerializeObject(serializable, IndentedSettings)); }

        public static T SerializeFromFile<T>(string path) { return JsonConvert.DeserializeObject<T>(File.ReadAllText(path), DefaultSettings); }
    }
}
