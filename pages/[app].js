import Head from 'next/head'
import SideBar from './components/app/sidebar/sidebar.js';
import NavBar from './components/app/navbar/navbar.js';
import Stage from './components/app/[app-stage]/[stage].js';
import { useRouter } from "next/router";
export { default as MessageList } from './components/Dashboard/modals/messages.js';
export { default as PCBSTAGE } from './components/app/pcb-stage/pcb-stage.js';
export { default as PCBONE } from './components/app/pcbs/pcb-1.js';
export { default as PCBTWO } from './components/app/pcbs/pcb-2.js';
export { default as PCBTHREE } from './components/app/pcbs/pcb-3.js';
export { default as Addmodal } from './components/app/modals/addmodal.js';
export default function Home() {

  return ( <
    div className = "container" >
    <
    Head >
    <
    title > ED-App< /title> <
    link rel = "icon"
    href = "/favicon.ico" / >

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Ubuntu:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet" />
    <
    /Head>
    <
    NavBar />
    <SideBar />
    <Stage />



    <
    script src = "https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossOrigin = "anonymous" > < /script> <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity = "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossOrigin = "anonymous" > < /script> <
    script src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity = "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossOrigin = "anonymous" > < /script>


    <
    style jsx > {
      `
        @media (min-width: 600px) {
          .container {
            max-width: 100%;
            flex-direction: column;
          }
        }
        .container {
          width: 100%;
          padding-right: 0;
          padding-left: 0;
          margin-right: auto;
          margin-left: auto;
      }
      `
    } < /style>

    <
    style jsx global > {
      `
              @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Ubuntu:ital,wght@0,300;0,400;0,500;1,400&display=swap');

              html,
              body {

                font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
                margin: 0;
                padding: 0!important;
                overflow-x: hidden;
                letter-spacing: 0.1em;
                font-smooth: antialiased;
                scroll-behaviour: smooth;
                zoom: 100%;
              }
      `
    } < /style>
  < /
    div >
  )
}
