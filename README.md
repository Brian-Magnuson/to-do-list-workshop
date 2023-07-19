# To-Do List Workshop

A simple to-do list app that allows editing items and saves items to local storage.

**Warning! This version of the to-do list is designed to have bugs. These bugs are meant to be fixed during the workshop.**

This project was designed for teaching the basics of the React library.

![image](https://user-images.githubusercontent.com/92892499/212929168-e8082df4-62b4-4996-b291-cb736e3dce52.png)

## Set Up

### 1. Check to see if you have Node.js installed on your computer. Version 16.0.0 or later is recommended.

Enter the following commands in a terminal instance
```
node --version
```
```
npm --version
```
If you see version numbers appear, you have node installed. 
If you have an earlier version of node, consider updating to a newer version.
Otherwise, skip to step 3.

**Warning**: If you are using Windows PowerShell, you may receive an error message stating that running scripts is disabled on your computer.
If this happens, you can set the execution policy to "Remote Signed" by running PowerShell as an administrator and running the following command:
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
You can also try using the Windows Command prompt instead.

### 2. Install Node.js

I recommend installing Node Version Manager on your computer to easily install versions of Node.

**MacOS / Linux**, follow the instructions on the nvm repo page to install nvm:

https://github.com/nvm-sh

Then run:
```
nvm install --lts && nvm use --lts
```

**Windows**, follow the instructions on the nvm-windows repo page to install nvm:

https://github.com/coreybutler/nvm-windows

Open a terminal instance as an admin and run:
```
nvm install lts
```
```
nvm use lts
```

**All users**, use the commands in step 1 to check that Node is installed.

### 3. Clone the repository

If you have git installed, you can go into any directory, open a terminal instance, and run

```
git clone https://github.com/Brian-Magnuson/to-do-list-workshop.git
```

If you do not have git installed, you can download the files from the repository page and extract them into an empty directory on your computer.

However, I highly recommend that you install git. It's an powerful tool ubiquitous in the world of software development.

https://git-scm.com/

### 4. Open the repository in a text editor

Visual Studio Code is the recommended text editor for this workshop.
Instructions will assume you are using Visual Studio Code.
You can install it for free here:

https://code.visualstudio.com/

If you prefer using another text editor, make sure you know how to use it. 

Open the repository in your text editory. (In VSCode: File > Open Folder...)

### 5. Install the node modules

Open a terminal instance. If you are using VSCode, you can go to Terminal > New Terminal.

Run the command:
```
npm install
```

Wait for the packages to finish installing. Once this is done, you are all set up!

## Starting the app

To start the app, make sure that the node modules are installed.

Open a terminal instance and run
```
npm run dev
```
Open the provided link in a browser.