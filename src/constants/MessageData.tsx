import Lisa from "../assets/lisa.svg";
import Jamie from "../assets/jamie.svg";
import MessageNum from "../assets/messageNum.svg";
import Jason from "../assets/jason.svg";
import MessageRead from "../assets/messageRead.svg";
import Amy from "../assets/amy.svg";
import Paul from "../assets/paul.svg";
import Ana from "../assets/ana.svg";
import MessageRead1 from "../assets/messageRead1.svg"

export const messagesData = [
  {
    name: "Lisa Roy",
    message: 'Hi, are you Available Tomorrow?',
    icon: Lisa,
    // other: Pencil,
  },
  {
    name: "Jamie Taylor",
    message: 'Nice One. Will Do it tommorow',
    icon: Jamie,
    other: MessageNum,
  },
  {
    name: "Jason Roy",
    message: 'That’s Great. I am Looking forward to having a great start.',
    icon: Jason,
    other: MessageRead,
  },
  {
    name: "Amy Frost",
    message: 'Hi, will you start working on the chat app right now?',
    icon: Amy,
    other: MessageRead,
  },
];
