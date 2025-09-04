# Next.js এ আইকন ইনস্টল এবং ব্যবহার করার সহজ গাইড




## 🔹 1. Heroicons (Tailwind CSS এর অফিসিয়াল আইকন লাইব্রেরি)
```bash
npm install @heroicons/react
```




ব্যবহার করার নিয়ম (React component হিসেবে):
```jsx
import { HomeIcon } from '@heroicons/react/24/solid'

export default function Example() {
  return <HomeIcon className="h-6 w-6 text-blue-500" />
}
```






## 🔹 2. React Icons (সবচেয়ে জনপ্রিয়)
```bash
npm install react-icons
``` 
ব্যবহার করার নিয়ম:
```jsx
import { FaBeer } from "react-icons/fa";

export default function Example() {
  return <h3> Lets go for a <FaBeer className="inline text-yellow-500" /> ?</h3>
}
```
👉 react-icons এর মধ্যে Font Awesome, Material Design, Bootstrap, Ionicons সহ অসংখ্য আইকন প্যাক আছে।

👉 react-icons-এ অনেক লাইব্রেরি আছে (FA = Font Awesome, MD = Material Design, AI = Ant Design, ইত্যাদি)।
ডকুমেন্টেশন: https://react-icons.github.io/react-icons

1. উদাহরণস্বরূপ, Font Awesome থেকে একটা আইকন নিতে চাইলে:
```jsx
import { FaBeer } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">
        Lets go for a <FaBeer className="inline text-yellow-500 ml-2" /> ?
      </h1>
    </div>
  );
}
```

2. Material Design থেকে আইকন নিতে চাইলে:
```jsx
import { MdHome } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex gap-4">
      <MdHome className="text-2xl" />
      <span>Home</span>
    </nav>
  );
}
```






## 🔹 3. Font Awesome (বিশ্বের সবচেয়ে বড় আইকন লাইব্রেরি)
```bash
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
```

ব্যবহার করার নিয়ম:
```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
export default function Example() {
  return <FontAwesomeIcon icon={faCoffee} className="text-brown-500" />
}
```







## 🔹 4. Material UI Icons (Google এর Material Design এর আইকন)
```bash
npm install @mui/icons-material
```

ব্যবহার করার নিয়ম:
```jsx
import DeleteIcon from '@mui/icons-material/Delete';
export default function Example() {
  return <DeleteIcon className="text-red-500" />
}
```







## 🔹 5. Remix Icon (সিম্পল এবং ক্লিন আইকন)
```bash
npm install remixicon-react
```
ব্যবহার করার নিয়ম:
```jsx
import { HomeLine } from 'remixicon-react';
export default function Example() {
  return <HomeLine className="text-green-500" />
}
```







## 🔹 6. Boxicons (সহজে ব্যবহারযোগ্য এবং সুন্দর আইকন)
```bash
npm install boxicons
```
ব্যবহার করার নিয়ম:
```jsx
import { BxAlarm } from 'boxicons';
export default function Example() {
  return <BxAlarm className="text-purple-500" />
}
```







## 🔹 7. Ionicons (মোবাইল এবং ওয়েব অ্যাপের জন্য আইকন)
```bash
npm install ionicons
```
ব্যবহার করার নিয়ম:
```jsx
import { IonIcon } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';
export default function Example() {
  return <IonIcon icon={homeOutline} className="text-teal-500" />
}
```

