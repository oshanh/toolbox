import './imgtopdf.css';
import { useRef, useState, useCallback } from 'react';
import { Document, Page, Image, pdf, StyleSheet } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function App() {

  const styles = StyleSheet.create({
    image: {
      padding: 15,
      marginTop: 20,
      //backgroundColor: '#E4E4E4'
    },
  });

  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);
  //const [filename, setfilename] = useState('ab');


  const toPdf = useCallback(async () => {
    //const fn=prompt('Enter file name to save : ');
    //setfilename(fn);
    const files = fileInputRef.current.files;
    const imagePromises = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith('image/')) {
        alert('Invalid file type:', file.type);
        break;
      }
      imagePromises.push(readFileAsDataURL(file));
    }

    try {
      const images = await Promise.all(imagePromises);
      downloadPdf(images.filter(Boolean));
      fileInputRef.current.value = '';
    } catch (error) {
      console.error('Error reading files:', error);
    }
  }, []);

  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (ev) => resolve(ev.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };








  const downloadPdf = (images) => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      if (currentProgress >= 100) {
        clearInterval(interval);




        generatePdf(images);

        setProgress(100);

        //setProgress(0);


      } else {
        setProgress(currentProgress);
      }
    }, 100);
    setProgress(0);

  };









  const generatePdf = async (images) => {
    try {
      const doc = (
        <Document>
          {images.map((img, index) => (
            <Page key={index}>
              <Image src={img} style={styles.image} />
            </Page>
          ))}
        </Document>
      );
      const asPdf = pdf();
      asPdf.updateContainer(doc);
      const pdfBlob = await asPdf.toBlob();

      const fn = prompt('Enter file name to save : ');
      //setfilename(fn);
      //saveAs(pdfBlob, `${filename}.pdf`);
      saveAs(pdfBlob, `${fn}.pdf`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Images To PDF Converter</title>
        <link rel="icon" type="image/png" href='faviconImgToPDF.ico' />
      </Helmet>
      <div 
      //className="container"
      className=" mx-auto mt-10 p-6 bg-inherit cursor-auto  rounded-lg shadow-sm"
      
      >
        
        <div className="card">
          <h1 
              
              className="text-5xl m-5  font-bold mb-20"
          
          >Convert IMG to PDF</h1>
          <input type="file" 
                ref={fileInputRef} multiple 

                
          />
          <br></br>


          <button type='button' 
            onClick={toPdf}
            //className="btn-convert"
            class="mt-5 mb-5 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"

          >
            Convert

          </button>




          <br></br>

          <Box sx={{ width: '100%', height: '30px' }}>
            <LinearProgress variant="determinate" value={progress} style={{ height: '25px', borderRadius: '10px' }} />
          </Box>

          
        </div>
      </div>
    </div>
  );
}

export default App;
