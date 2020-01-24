import React, { Component } from 'react';
import image from "../Images/mla.jpg";
import image1 from "../Images/05.jpg";
import image2 from "../Images/work.jpg";
import image3 from "../Images/karyekarta.jpg";
import image4 from "../Images/collage.jpg"

class LandingPage extends Component {
    componentDidMount(){
        const M =window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems,{fullWidth: true});
          });
    }
  render() {
    return (
        <div className="background" style={{background:"url('../Images/00.jpg') no-repeat"}} >
          <div className="padding" style={{paddingTop:'2rem'}}>
          <div className="slider">
    <ul className="slides">
      <li>
        <img src={image} style={{height:"100%",margin :'auto',paddingTop:"10px"}}/> 
        <div className="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src={image1}/> 
        <div className="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src={image2}/>
        <div className="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src={image3}/>
        <div className="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    </ul>
  </div>
  </div>
  <div className="container">
  <div className="row">
      <div className="col s6">
          <h2>About</h2>
        <h3>Personal Life</h3>
        <p>
        <li>पंडित विनोद आशरी का जन्म 5 फरवरी 1963 वार मंगलवार को हुआ।</li></p>
       <p><li> दादा- पंडित गोपी नाथ (राज वैद्य)</li></p>
       <p><li> पिता- श्री राम सहाय आशरी एवं माता श्रीमती शकुंतला देवी </li></p>
       <p><li> मूलतः जींद(126102) निवासी है । </li></p>
       <p><li>आपके पूर्वजों ने सन 1964 में समाज सेवा के लिए बाल कल्याण हेतु क्रीड़ा स्थल के रूप में अर्जुन स्टेडियम की 56.6 बीघा जमीन (लगभग 11 एकड़) दान के रूप में दी जहां आज भी सैकड़ों युवाओं का खेलों में भविष्य बन रहा है।
          </li>
        </p>
        <p><li>व्यवसाय - सरकारी कॉन्ट्रेक्टर </li></p>
        <h3>Educational Life</h3>
        <p><li>प्रारंभिक शिक्षा एस डी सीनियर सेकेंडरी स्कूल जींद से और उच्चतर शिक्षा गवर्नमेंट कॉलेज जींद से हिन्दी भाषा से स्नातकोत्तर ( M.A. Hindi)</li></p>
        <p><li>अपने स्कूल,कॉलेज और जिले को क्रिकेट में बतौर Captain represent किया ,इनका Haryana Ranji team में भी सिलेक्शन हुआ ।</li></p>
        <p><li>आप स्कूल और कॉलेज की बहुत से नाटक और वाद-विवाद प्रतियोगिताओं में भी सक्रिय रहे ।</li> </p>
        <p><li> इन्होंने कई राष्ट्रीय स्तर पर नाटक ,वाद-विवाद की प्रतियोगिता एंव खेल के क्षेत्र अनेकानेक प्रतियोगिताएं जीती है |</li></p>
        <h3>Political Career</h3>
        <p><li>अपने राजनैतिक जीवन की शुरुआत1985 -Government College jind  के छात्र संग के सेक्रेट्री पद से की।</li></p>
        <p><li>1991 में कॉलेज से निकलते ही इन्होंने अपना पहला नगर पालिका का चुनाव लड़ा और फिर अपना राजनैतिक सफ़र जारी रखते हुए 1996,2000,2005,2010,2016 में नगर परिषद् के चुनाव लड़े ,जिसमें 1996,2005,2010,2016 
               में नगर पार्षद रहे और 2016 में पूरे हरियाणा में सबसे ज्यादा 1534 वोटों से नगर परिषद् का चुनाव जीते ।</li></p>
        <p><li>2005 ,2009 में नगर परिषद् के अध्यक्ष रहे और 2016 में नगर परिषद् के उपाध्यक्ष रहे।</li></p> 
        <p><li>नगर परिषद् के प्रधान पद पर रहते हुए जींद शहर के विकास के लिए बहुत योजनाएं बनायी जिसमें मुख्य -Slum बस्तियों के विकास
               के साथ साथ HISDP(Haryana Integrated Slum Development Project) के तहत 19 करोड़ की राशि मंजूर हुई और 2009 में
                परिषद प्रधान रहते हुए शहर की विभिन colonies के Sewar निकासी के लिए 20 करोड़ की राशि सरकार से मंजूर करवाई ।</li></p>
        <p> <li> लगभग 100 करोड़ की राशि के शहर की विभिन कॉलोनियो की गलियो का निर्माण करवाया ।</li></p>
        <p><li>जनवरी 2019 में इन्होंने बढ़े मजबूती से लोकतंत्र सुरक्षा पार्टी से जींद विधानसभा का बाई इलेक्शन लढ़ा ,यह वही इलेक्शन था जिसने हरियाणा 
               की आगे की राजनीति तय करनी थी और इस इलेक्शन  में लगभग 14000 वोट हासिल किये थे ।</li></p>
        <p><li>पंडित विनोद आशरी ने प्रधानमंत्री श्री नरेंद्र मोदी जी और मानिनये मुख्यमंत्री श्री मनोहर लाल खट्टर जी की नीतियों से प्रभावित होकर मई 2019
              में मुख्यमंत्री श्री मनोहर लाल जी की अध्यक्षता में अपने निवास स्थान पर भाजपा का दामन थामा ।</li></p>
        <p><li>विनोद आशरी  ने बहुत से सामाजिक कार्यों में सहयोग किया और ये बहुत सी सामाजिक संस्थाओं के member है जिसमे ब्राह्मण सभा जींद,lions club 
               jind |</li></p> 
         <h3>Office Held</h3>
         <p><li>Four time municipal Councilor and presently Municipal Councilor from ward number -15 Jind . </li></p> 
         <p><li>Two time Chairman  Municipal Council Jind .</li></p> 
         <p><li>One time Vice-Chairman Municipal Council Jind .</li></p>
         <p><li>Vice- State President Loktanter Suraksha Party .</li></p>  
         <p><li>Lifetime Member Brahman Sabha Jind </li></p>  
         </div>
      <div className="col s6"><h2>photo</h2>
      <div className="col s12 m4 l8">
      <img className="materialboxed" shadow={5} style={{width:'400px',margin:'auto'}} src={image}></img>
      </div>
      <div className="col s12 m4 l8"style={{paddingTop :'170px'}}>
      <img className="materialboxed" shadow={5} style={{width:'400px',margin:'auto'}} src={image1}></img>
      </div>
      <div className="col s12 m4 l8" style={{paddingTop :'170px'}}>
      <img className="materialboxed" shadow={5} style={{height:'500px',width:'400px',margin:'auto'}} src={image4}></img>
      </div>
      <div className="col s12 m4 l8" style={{paddingTop :'80px'}}>
      <img className="materialboxed" shadow={5} style={{width:'400px',margin:'auto'}} src={image3}></img>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default LandingPage
