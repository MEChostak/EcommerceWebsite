
## Run Locally

Clone the project

```bash
  git clone https://github.com/MEChostak/EcommerceWebsite.git
```

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

Layout approach: I used a structure based on Flexbox and Grid to ensure consistent alignment between image, name, price, and buttons, keeping the content organized even on different resolutions. The design was inspired by a clean UI, with comfortable internal spacing and clear typography.

Responsiveness considerations: I adopted breakpoints at 768px and 480px to adapt the layout of elements, switching from a row layout to a column layout on smaller screens, and ensuring images resize proportionally. I also made sure that buttons and dropdowns remained clickable on touch devices.