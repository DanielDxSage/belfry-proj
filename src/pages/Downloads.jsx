import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Downloads = () => {
  const onButtonClick = () => {
    fetch('apel_e_mandate.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'apel_e_mandate.pdf';
          alink.click();
      })
    })
  }
  const onButtonClick2 = () => {
    fetch('cardinal_stone_e_dividend.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let cardinal = document.createElement('a');
          cardinal.href = fileURL;
          cardinal.download = 'cardinal_stone_e_dividend.pdf';
          cardinal.click();
      })
    })
  }
  const onButtonClick3 = () => {
    fetch('GTL_e_mandate.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let gtl = document.createElement('a');
          gtl.href = fileURL;
          gtl.download = 'GTL_e_mandate.pdf';
          gtl.click();
      })
    })
  }
  const onButtonClick4 = () => {
    fetch('datamax.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let datamax = document.createElement('a');
          datamax.href = fileURL;
          datamax.download = 'datamax.pdf';
          datamax.click();
      })
    })
  }
  const onButtonClick5 = () => {
    fetch('pac_registrars.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let pac = document.createElement('a');
          pac.href = fileURL;
          pac.download = 'pac_registrars.pdf';
          pac.click();
      })
    })
  }
  const onButtonClick6 = () => {
    fetch('pace_mandate.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let pace = document.createElement('a');
          pace.href = fileURL;
          pace.download = 'pace_mandate.pdf';
          pace.click();
      })
    })
  }
  
  const onButtonClick8 = () => {
    fetch('purchase_mandate.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let purchase = document.createElement('a');
          purchase.href = fileURL;
          purchase.download = 'purchase_mandate.pdf';
          purchase.click();
      })
    })
  }
  const onButtonClick9 = () => {
    fetch('sales_mandate_form.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let sales = document.createElement('a');
          sales.href = fileURL;
          sales.download = 'sales_mandate_form.pdf';
          sales.click();
      })
    })
  }


  return (
    <div>
      <Nav/>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              Download Our Resources
            </h2>
            <p className="text-gray-600 mb-8">
              Access our collection of helpful resources for your convenience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resource 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 h-[10.5rem]">
              <h3 className="text-xl font-semibold mb-1 text-gray-500">E-Mandate </h3>
              <p className="text-gray-600 mb-4">
                Apel E-Madate
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded" onClick={onButtonClick}>
                Download Pdf
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 h-[10.5rem]">
              <h3 className="text-xl font-semibold mb-1 text-gray-500">E-Mandate</h3>
              <p className="text-gray-600 mb-4">
                Cardinal Stone E-Madate
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded" onClick={onButtonClick2}>
                Download Pdf
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 h-[10.5rem]">
              <h3 className="text-xl font-semibold mb-1 text-gray-500">E-Mandate</h3>
              <p className="text-gray-600 mb-4">
                GTL E-Madate
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded" onClick={onButtonClick3}>
                Download Pdf
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 h-[10.5rem]">
              <h3 className="text-xl font-semibold mb-1 text-gray-500">E-Mandate</h3>
              <p className="text-gray-600 mb-4">
                Datamax E-Madate
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded" onClick={onButtonClick4}>
                Download Pdf
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 h-[10.5rem]">
              <h3 className="text-xl font-semibold mb-1 text-gray-500">E-Mandate</h3>
              <p className="text-gray-600 mb-4">
                Pac E-Dividend Activation Form
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded" onClick={onButtonClick5}>
                Download Pdf
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 h-[10.5rem]">
              <h3 className="text-xl font-semibold mb-1 text-gray-500">E-Mandate</h3>
              <p className="text-gray-600 mb-4">
                Pace E-Mandate 
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded" onClick={onButtonClick6}>
                Download Pdf
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 h-[10.5rem]">
              <h3 className="text-xl font-semibold mb-1 text-gray-500">E-Mandate</h3>
              <p className="text-gray-600 mb-4">
                Purchase Mandate 
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded" onClick={onButtonClick8}>
                Download Pdf
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 h-[10.5rem]">
              <h3 className="text-xl font-semibold mb-1 text-gray-500">E-Mandate</h3>
              <p className="text-gray-600 mb-4">
                Sale Mandate
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded" onClick={onButtonClick9}>
                Download Pdf
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Downloads
