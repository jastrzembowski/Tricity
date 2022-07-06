import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Success from "./components/main/Success";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Technologies from "./components/technologies/Technologies";
import Company from "./components/company/Company";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import AI from "./components/services/AI";
import Cloud from "./components/services/Cloud";
import DataScience from "./components/services/DataScience";
import MobileDev from "./components/services/MobileDev";
import QA from "./components/services/QA";
import SoftArch from "./components/services/SoftArch";
import SoftAudits from "./components/services/SoftAudits";
import SoftDev from "./components/services/SoftDev";
import UiDesign from "./components/services/UiDesign";
import WebDev from "./components/services/WebDev";
import AWS from "./components/technologies/cloud/AWS";
import Azure from "./components/technologies/cloud/Azure";
import Docker from "./components/technologies/cloud/Docker";
import GCP from "./components/technologies/cloud/GCP";
import Kubernetes from "./components/technologies/cloud/Kubernetes";
import Microservices from "./components/technologies/cloud/Microservices";
import Serverless from "./components/technologies/cloud/Serverless";
import C from "./components/technologies/desktop/C";
import Delphi from "./components/technologies/desktop/Delphi";
import Java from "./components/technologies/desktop/Java";
import Net from "./components/technologies/desktop/Net";
import Python from "./components/technologies/desktop/Python";
import Android from "./components/technologies/mobile/Android";
import Flutter from "./components/technologies/mobile/Flutter";
import Ionic from "./components/technologies/mobile/Ionic";
import PhoneGap from "./components/technologies/mobile/PhoneGap";
import ReactNative from "./components/technologies/mobile/ReactNative";
import Swift from "./components/technologies/mobile/Swift";
import Xamarin from "./components/technologies/mobile/Xamarin";
import Appium from "./components/technologies/qa/Appium";
import Cucumber from "./components/technologies/qa/Cucumber";
import Protractor from "./components/technologies/qa/Protractor";
import Robot from "./components/technologies/qa/Robot";
import Selenium from "./components/technologies/qa/Selenium";
import Angular from "./components/technologies/web/Angular";
import Drupal from "./components/technologies/web/Drupal";
import JavaSpring from "./components/technologies/web/JavaSpring";
import Nodejs from "./components/technologies/web/Nodejs";
import Reac from "./components/technologies/web/Reac";
import Vue from "./components/technologies/web/Vue";
import Wordpress from "./components/technologies/web/Wordpress";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/company" element={<Company/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/technologies" element={<Technologies/>}/>
        <Route path="/contact" element={<Contact/> }/>
        <Route path="/ai" element={<AI/>} />
        <Route path="/cloudanddevops" element={<Cloud/>} />
        <Route path="/datascience" element={<DataScience/>} />
        <Route path="/mobiledevelopment" element={<MobileDev/>} />
        <Route path="/qa" element={<QA/>} />
        <Route path="/softwarearchitecture" element={<SoftArch/>} />
        <Route path="/softwaresecurity" element={<SoftAudits/>} />
        <Route path="/softwaredevelopment" element={<SoftDev/>} />
        <Route path="/uidesign" element={<UiDesign/>} />
        <Route path="/webdevelopment" element={<WebDev/>} />
        <Route path="/aws" element={<AWS/>} />
        <Route path="/azure" element={<Azure/>} />
        <Route path="/docker" element={<Docker/>} />
        <Route path="/gcp" element={<GCP/>} />
        <Route path="/kubernetes" element={<Kubernetes/>} />
        <Route path="/microservices" element={<Microservices/>} />
        <Route path="/serverless" element={<Serverless/>} />
        <Route path="/c" element={<C/>} />
        <Route path="/delphi" element={<Delphi/>} />
        <Route path="/java" element={<Java/>} />
        <Route path="/net" element={<Net/>} />
        <Route path="/python" element={<Python/>} />
        <Route path="/android" element={<Android/>} />
        <Route path="/flutter" element={<Flutter/>} />
        <Route path="/ionic" element={<Ionic/>} />
        <Route path="/phonegap" element={<PhoneGap/>} />
        <Route path="/reactnative" element={<ReactNative/>} />
        <Route path="/swift" element={<Swift/>} />
        <Route path="/xamarin" element={<Xamarin/>} />
        <Route path="/appium" element={<Appium/>} />
        <Route path="/cucumber" element={<Cucumber/>} />
        <Route path="/protractor" element={<Protractor/>} />
        <Route path="/robot" element={<Robot/>} />
        <Route path="/selenium" element={<Selenium/>} />
        <Route path="/angular" element={<Angular/>} />
        <Route path="/drupal" element={<Drupal/>} />
        <Route path="/javaspring" element={<JavaSpring/>} />
        <Route path="/nodejs" element={<Nodejs/>} />
        <Route path="/react" element={<Reac/>} />
        <Route path="/vue" element={<Vue/>} />
        <Route path="/blog/success" element={<Success/>} />
        <Route path="/wordpress" element={<Wordpress/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
