<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/makoto357/wordle-clone">
    <img src="../media/src/images/wordle-logo.png?raw=true" alt="Logo" width="120">
  </a>

<h3 align="center">Wordle Clone 2.0</h3>

  <p align="center">
    A Worldle clone with a refreshing color scheme, built using Next.js, Zustand, and Storybook.
    <br />
    <a href="https://wordle-2-makoto357.vercel.app/" target="_blank"><strong>Website URL »</strong></a>
    <br />
  </p>
</div>

### Built With

- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
- ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
- ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) (EC2 for deploying the website)
- [zustand](https://github.com/pmndrs/zustand) for state management of the app.
- [Headless UI](https://headlessui.com/) for integrating UI components with Tailwind CSS.
- [Husky pre-commit hooks](https://typicode.github.io/husky/getting-started.html) for improving code quality.

## Feature

- A refreshing color palette to bring a different vibe to this classic game (with a built-in mobile keyboard)!<br> 
  <img width="500" alt="color palette" src="../media/src/images/wordle-color-palette.png?raw=true" />
- RWD for the mobile version.<br> 
  <img width="300" alt="color palette" src="../media/src/images/wordle-color-palette-mobile.png?raw=true" />
- Dialog boxes to inform players of the game status.<br>
  <img width="300" alt="dialog boxes" src="../media/src/images/wordle-dialog.png?raw=true">
- Popovers for players to either reset the game or read the instructions.<br>
  <img width="300" alt="popovers" src="../media/src/images/wordle-popover.png?raw=true">
- Alerts to remind players of invalid guesses.<br>
  <img width="300" alt="alerts" src="../media/src/images/wordle-alert.png?raw=true">
- This web app was originally deployed using AWS EC2:<br>

1. EC2 instance:<br>
   <img width="500" alt="ec2 instance" src="../media/src/images/wordle-ec2-instance.png?raw=true">
2. EC2 client (run with PM2):<br>
   <img width="500" alt="ec2 instance" src="../media/src/images/wordle-ec2-client.png?raw=true">
3. Browser:<br>
   <img width="500" alt="ec2 instance" src="../media/src/images/wordle-ec2-browser.png?raw=true">
