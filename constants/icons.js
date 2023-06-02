import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import snapchat from "../assets/snapchat.png"
import spotify from "../assets/spotify.png"
import telegram from "../assets/telegram.png"
import microsoft from "../assets/microsoft.png"
import facebook from "../assets/facebook.png"
import github from "../assets/github.png"
import netflix from "../assets/netflix.png"
import google from "../assets/google.png"


const socialMediaArray = [
    { id: "github", name: "GitHub", image: github },
    { id: "linkedin", name: "LinkedIn", image: linkedin },
    { id: "twitter", name: "Twitter", image: twitter },
    { id: "snapchat", name: "Snapchat", image: snapchat },
    { id: "spotify", name: "Spotify", image: spotify },
    { id: "telegram", name: "Telegram", image: telegram },
    { id: "microsoft", name: "Microsoft", image: microsoft },
    { id: "facebook", name: "Facebook", image: facebook },
    { id: "netflix", name: "Netflix", image: netflix },
    { id: "google", name: "Google", image: google }
];


const services = [
    {
      title: "Work",
      liste: [
        { service_name: "John Doe", login: "johndoe@example.com", image: microsoft },
        { service_name: "Jane Doe", login: "janedoe@example.com", image: github },
        { service_name: "Bob Smith", login: "bobsmith@example.com", image: linkedin }
      ]
    },
    {
      title: "Priority",
      liste: [
        { service_name: "Alice Johnson", login: "alicejohnson@example.com", image: netflix },
        { service_name: "David Lee", login: "davidlee@example.com", image: facebook },
        { service_name: "Emily Chen", login: "emilychen@example.com", image: snapchat }
      ]
    },
    {
      title: "Entertainment",
      liste: [
        { service_name: "Michael Brown", login: "michaelbrown@example.com", image: twitter },
        { service_name: "Rachel Kim", login: "rachelkim@example.com", image: google },
        { service_name: "Steven Rodriguez", login: "stevenrodriguez@example.com", image: telegram }
      ]
    },
    {
      title: "Others",
      liste: [
        { service_name: "Olivia Davis", login: "oliviadavis@example.com", image: spotify },
        { service_name: "William Wilson", login: "williamwilson@example.com", image: facebook },
        { service_name: "Sophia Garcia", login: "sophiagarcia@example.com", image: twitter }
      ]
    },
    {
      title: "Games",
      liste: [
        { service_name: "Daniel Hernandez", login: "danielhernandez@example.com", image: telegram },
        { service_name: "Isabella Martinez", login: "isabellamartinez@example.com", image: netflix },
        { service_name: "Andrew Perez", login: "andrewperez@example.com", image: microsoft }
      ]
    },
    {
      title: "Education",
      liste: [
        { service_name: "Mia Robinson", login: "miarobinson@example.com", image: google },
        { service_name: "Ethan Green", login: "ethangreen@example.com", image: github },
        { service_name: "Ava Lewis", login: "avalewis@example.com", image: linkedin }
      ]
    }
  ];

export default services;