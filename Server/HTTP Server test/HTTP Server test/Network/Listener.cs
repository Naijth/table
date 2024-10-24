using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace HTTP_Server
{
    public class Listener
    {
        HttpListener listener = new HttpListener();
        public Listener()
        {
            listener.Prefixes.Add("http://localhost:8080/");
            listener.Start();
            Task.Run(() => { Listen(); });
        }

        public void Listen()
        {
            while (true)
            {
                HttpListenerContext context = listener.GetContext();
                HttpListenerRequest request = context.Request;
                HttpListenerResponse response = context.Response;

                response.Headers.Add("Access-Control-Allow-Origin", "*");
                response.Headers.Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
                response.Headers.Add("Access-Control-Allow-Headers", "Content-Type");

                if (request.HttpMethod == "OPTIONS")
                {
                    response.StatusCode = (int)HttpStatusCode.OK;
                    response.Close();
                    continue;
                }

                string responseString = "";

                if (request.HttpMethod == "POST")
                {
                    using (var reader = new StreamReader(request.InputStream, request.ContentEncoding))
                    {
                        string requestBody = reader.ReadToEnd();
                        PersonData person = JsonConvert.DeserializeObject<PersonData>(requestBody);
                        Console.WriteLine(person.firstname1);
                        if(person.id == 0)
                        {
                            person.id = Program.people.Count + 1;
                        }
                        PersonData temp = Program.people.Where(P => P.id == person.id).FirstOrDefault();
                        if (temp != null)
                        {
                            temp = person;
                        }
                        else
                        {
                            Program.people.Add(person);
                        }
                        List<byte[]> b = new List<byte[]>();
                        foreach (PersonData personData in Program.people)
                            b.Add(Serializer.ConvertObjectToBytes(personData));
                        Serializer.SerializeToFile(Program.path, b.ToArray());

                        responseString = $"Data received successfully for {person.firstname1} {person.lastname}";
                        byte[] buffer = Encoding.UTF8.GetBytes(responseString);
                        response.OutputStream.Write(buffer, 0, buffer.Length);
                        response.OutputStream.Close();
                        response.Close();
                    }
                }

                if (request.HttpMethod == "GET")
                {
                    string action = request.QueryString["action"];

                    if (action == "Get-All")
                    {
                        responseString = JsonConvert.SerializeObject(Program.people.ToArray());
                    }

                    if (!string.IsNullOrEmpty(responseString))
                    {
                        byte[] buffer = Encoding.UTF8.GetBytes(responseString);
                        response.OutputStream.Write(buffer, 0, buffer.Length);
                        response.OutputStream.Close();
                        response.Close();
                    }
                }
            }
        }

    }
}