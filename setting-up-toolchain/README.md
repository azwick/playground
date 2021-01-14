# Playground for practicing React Hooks

## Set-up toolchain 

#### Install React & Next.js
(Make sure node is already installed!)
```
mkdir setting-up-toolchain
cd setting-up-toolchain
pwd
npm init -y
npm install react react-dom next
vi package.json
```

#### Open the package.json and add following lines to "scripts"
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
```

#### Set up a folder 
(Create a index.js inside & paste first code.)
```
mkdir pages
```

#### Run the project with this command
```
npm run dev
```

[Recommended Toolchains directly from React](reactjs.org/docs/create-a-new-react-app.html)