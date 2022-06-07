import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuentros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor at eros sit amet venenatis. Integer vehicula diam ut ipsum auctor tincidunt. Nulla magna risus, lacinia vel egestas sit amet, feugiat vel nisi. Vestibulum sodales faucibus neque non bibendum. Curabitur tempus commodo magna, quis congue nisl aliquet a. Phasellus condimentum hendrerit nisi nec tempor.' />  
        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de software'
          empresa='ChatDesk'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec imperdiet arcu. Aenean sed dignissim ex. Praesent maximus dictum quam, sagittis ullamcorper elit placerat a. Sed ac justo vitae turpis aliquam rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' />
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotyfy'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan gravida accumsan. In pretium mauris a pellentesque pulvinar. Vestibulum vel risus magna. Phasellus nec ipsum id massa hendrerit tristique. Etiam egestas arcu et est faucibus dictum. Aliquam nunc nisl, cursus auctor tellus id, dapibus venenatis turpis. Sed non metus vitae tortor efficitur scelerisque in rutrum quam. Quisque volutpat nec nunc ac tincidunt.' />
      </div>
    </div>
  );
}

export default App;
