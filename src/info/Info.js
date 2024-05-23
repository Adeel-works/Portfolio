import self from "../img/photo.png"
// import mock2 from "../img/mock1.png"
import mock9 from '../img/mock9.svg';
import graana from '../img/graana.svg';
import dagtalah from '../img/dagtalah.svg';
import worklics from '../img/worklics.svg';
import loot8 from '../img/loot8.svg';
import onboarding from '../img/onboarding.svg';
import vitPayConsumer from '../img/VitPay.svg';
import vitPayAgent from '../img/vitPayAgent.svg';
import deliveryApp from '../img/deliveryApp.svg';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Adeel",
    lastName: "Mirza",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "I engineer solutions",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: "💼",
            text: "Senior Software Engineer @ Codeninjaconsulting"
        },
        {
            emoji: "📧",
            text: "techgeek027@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Adeel-works",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/adeel-mirza101",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Greetings! I'm Adeel. I'm a senior software engineer at codeninja consultings. I have been developing solutions for most of my youth and over the years I have learned that there's a fine line between a developer and an engineer, Thats why you should hire me !!",
    skills:
        {
            proficientWith: ['javascript', 'react','react-native','vue','firebase','git', 'github', 'bootstrap', 'html5', 'css3','typescript'],
            exposedTo: ['nodejs', 'adobe xd', 'docker', 'aws', 'gcp', 'postgresql',"code-push",'socket.io','mongodb'],
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'exercise',
            emoji: '💪🏽',
        },
        {
            label: 'car enthusiast',
            emoji: '🏎️',
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Funoonee",
            desc:"Funoonee is an unrivaled online marketplace connecting home maintenance and handyman service providers and users in Riyadh, Al Damam, Jeddah, and Taif. We are recognized as the most trustworthy online platform to the people of these cities. With our determination and dedication, we have won thousands of hearts in these cities over the years and are expanding to other cities of Pakistan",
            live: "https://funoonee.com/",
            appLink:"https://play.google.com/store/apps/details?id=com.funoonee",
            image: mock9
        },
        {
            title: "Graana",
            desc:"Graana is set to change the conventional real estate industry of Pakistan into a modern, transparent, and data-driven RE industry. Safety, security and transparency are synonymous to Graana. With the help of Graana app, you can buy, rent, sell, and rent out your property.",
            live: "https://www.graana.com/",
            appLink:"https://play.google.com/store/apps/details?id=com.graanaapp",
            image: graana
        },
        {
            title: "Dagtalah Admin",
            desc:"Dagtalah is an e-commerce store based in UAE. The admin panel is used to monitor and add new stores under dagtalah. Managing their invoices and adding new modules based on the store's functionality and vision. We can also add new features based on requirements for the store. The admin panel also provides a free drag drop ui for creating invoices and updating the visuals as per need. ",
            live: "",
            image: dagtalah
        },
        {
            title: "Worklics",
            desc:"Worklics is an all in one employee management application that allows an organization to manage their employees and track their time, along with their teams. The feature to allow the teams to work from any where (from a requested location) with the approval of the managers makes it a complete package.",
            live: "https://emp.codeninjaconsulting.com",
            appLink:"https://play.google.com/store/apps/details?id=com.dxyfer.worklics1",
            image: worklics
        },
        {
            title: "LOOT8",
            desc:"At Loot8, we are building the new foundation for creators, entertainers, patrons and venues that will revolutionize the way we connect. We believe that Web3 is the evolution of not only the web, but the world as we all experience it. We put the freedom back into the hands of those who should have it.",
            live: "https://establishment.loot8.dev/",
            appLink:"https://play.google.com/store/apps/details?id=com.loot8.loot8_app",
            image: loot8
        },
        {
            title: "24Seven.PK (Onboarding App)",
            desc:"A platform for digitized lead generation for the sales team to use internally for creating, assessing and processing potential leads to on-boarded partners. It allows quick, easy and accurate data gathering that assists in deciding which leads to convert in a timely manner.",
            live: "",
            appLink:"https://play.google.com/store/apps/details?id=com.apniDukaanOnBoardingApp",
            image: onboarding
        },
        {
            title: "24Seven.PK (Delivery App)",
            desc:"A platform for managing and tracking orders for the 24Seven ERP. This app acts a gateway between Odoo & our riders. This app is developed using react-native, nodeJs, HapiJs",
            live: "",
            appLink:"",
            image: deliveryApp
        },
        {
            title: "24Seven.PK (Consumer App)",
            desc:"A platform for managing and tracking orders for the 24Seven ERP. This app acts a gateway between Odoo & our riders. This app is developed using react-native, nodeJs, HapiJs",
            live: "",
            appLink:"",
            image: deliveryApp
        },
        {
            title: "VitPay(Consumer App)",
            desc:" VitPay is an innovative mobile payment solution for VitPay customers. It allows you to perform simple financial transactions, like send money to loved ones, buy prepaid airtime or data for yourself or other wallet holders, pay for goods and services, apply for both personal and SME loans all using your mobile phone.",
            live: "",
            appLink:"",
            image: vitPayConsumer
        },
        {
            title: "VitPay(Agent App)",
            desc:"VitPay is an innovative mobile payment solution for VitPay customers. It allows you to perform simple financial transactions, like send money to loved ones, buy prepaid airtime or data for yourself or other wallet holders, pay for goods and services, apply for both personal and SME loans all using your mobile phone.",
            live: "",
            appLink:"",
            image: vitPayAgent
        },
       
    ]
}