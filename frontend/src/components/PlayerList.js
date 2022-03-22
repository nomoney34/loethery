export default function() {
  const addresses = [
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
    '0x19aCd555DB36BC7F8039d1022555cbB554750043',
  ];


  return (
    <div className="card grow md:w-1/2 overflow-y-scroll divide-y divide-solid dark:divide-slate-600 max-h-[70vh] md:max-h-[50vh]">
      <h2 className="text-3xl px-4 my-2 font-bold dark:text-slate-50">Players ({addresses.length})</h2>
      <div className="my-2">
        <div className="mx-4 overflow-x-scroll">
          { addresses.length > 0
          ? <ul className="mt-4">
              { addresses.map(address => 
                  <li className="mb-2 font-mono" key={address}>{ address }</li>
                )
              }
            </ul>
          : <p className="mt-4">No players yet.</p>
          }
        </div>
      </div>
    </div>
  );
}