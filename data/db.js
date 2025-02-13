const viaggi = [
  {
    id_viaggio: 1,
    nome_viaggio: 'Tour in Toscana',
    destinazione: 'Toscana, Italia',
    tipologia: 'Culturale',
    accompagnatore: 'Giovanni Rossi',
    immagine: 'https://example.com/immagine-toscana.jpg',
    descrizione: 'Un viaggio alla scoperta delle meraviglie artistiche e storiche della Toscana. Visiteremo città come Firenze, Siena e Pisa.',
    data_inizio: '2025-03-01',
    data_fine: '2025-03-07',
    partecipanti: [
      { id_partecipante: 'P1', nome: 'Luca', cognome: 'Bianchi', telefono: '3201234567', email: 'luca.bianchi@example.com', codice_fiscale: 'BNCLCU85M01H501A' },
      { id_partecipante: 'P2', nome: 'Maria', cognome: 'Verdi', telefono: '3287654321', email: 'maria.verdi@example.com', codice_fiscale: 'VRDMRA92F50A662D' },
      { id_partecipante: 'P3', nome: 'Giulia', cognome: 'Ferrari', telefono: '3381234567', email: 'giulia.ferrari@example.com', codice_fiscale: 'FRRGLL94D45Z404H' },
      { id_partecipante: 'P4', nome: 'Marco', cognome: 'Esposito', telefono: '3459876543', email: 'marco.esposito@example.com', codice_fiscale: 'SPTMRR81S10L219F' },
      { id_partecipante: 'P5', nome: 'Sofia', cognome: 'Russo', telefono: '3476543210', email: 'sofia.russo@example.com', codice_fiscale: 'RSSFSA93T54L219G' },
      { id_partecipante: 'P6', nome: 'Antonio', cognome: 'Ricci', telefono: '3311122334', email: 'antonio.ricci@example.com', codice_fiscale: 'RCCNTN85C12F839B' },
      { id_partecipante: 'P7', nome: 'Francesca', cognome: 'Giordano', telefono: '3425567890', email: 'francesca.giordano@example.com', codice_fiscale: 'GRDFNC80F62H501B' },
      { id_partecipante: 'P8', nome: 'Davide', cognome: 'Lombardi', telefono: '3386547890', email: 'davide.lombardi@example.com', codice_fiscale: 'LMBDVD85D12L219J' },
      { id_partecipante: 'P9', nome: 'Elena', cognome: 'Conti', telefono: '3309988776', email: 'elena.conti@example.com', codice_fiscale: 'CNTLNA91M01H501X' },
      { id_partecipante: 'P10', nome: 'Francesco', cognome: 'Mancini', telefono: '3394455667', email: 'francesco.mancini@example.com', codice_fiscale: 'MNCFNC85B12Z404P' }
    ]
  },

  {
    id_viaggio: 2,
    nome_viaggio: 'Avventura in Giappone',
    destinazione: 'Giappone',
    tipologia: 'Avventura',
    accompagnatore: 'Claudia Moretti',
    immagine: 'https://example.com/immagine-giappone.jpg',
    descrizione: 'Un viaggio entusiasmante attraverso le principali città giapponesi, tra cui Tokyo, Kyoto e Osaka. Scopri la cultura, la natura e la cucina giapponese.',
    data_inizio: '2025-05-10',
    data_fine: '2025-05-20',
    partecipanti: [
      { id_partecipante: 'P11', nome: 'Alessandro', cognome: 'Martini', telefono: '3332221111', email: 'alessandro.martini@example.com', codice_fiscale: 'MRTLSN85H01A662C' },
      { id_partecipante: 'P12', nome: 'Simona', cognome: 'Rossi', telefono: '3302233445', email: 'simona.rossi@example.com', codice_fiscale: 'RSSMNS85B44Z202D' },
      { id_partecipante: 'P13', nome: 'Vincenzo', cognome: 'Gallo', telefono: '3475647382', email: 'vincenzo.gallo@example.com', codice_fiscale: 'GLLVNC87R31F205E' },
      { id_partecipante: 'P14', nome: 'Lorenzo', cognome: 'Miele', telefono: '3389087766', email: 'lorenzo.miele@example.com', codice_fiscale: 'MLLNRZ82P14Z404D' },
      { id_partecipante: 'P15', nome: 'Irene', cognome: 'Lombardi', telefono: '3381234567', email: 'irene.lombardi@example.com', codice_fiscale: 'LMBIRE94M41A462R' },
      { id_partecipante: 'P16', nome: 'Giovanna', cognome: 'Pugliese', telefono: '3201122334', email: 'giovanna.pugliese@example.com', codice_fiscale: 'PGLGNN92B53F205F' },
      { id_partecipante: 'P17', nome: 'Raffaele', cognome: 'Ferrara', telefono: '3312334455', email: 'raffaele.ferrara@example.com', codice_fiscale: 'FRRRFL82T16G666T' },
      { id_partecipante: 'P18', nome: 'Michele', cognome: 'Bianchi', telefono: '3294455667', email: 'michele.bianchi@example.com', codice_fiscale: 'BNCMHL85P01F839M' },
      { id_partecipante: 'P19', nome: 'Barbara', cognome: 'Perri', telefono: '3387766554', email: 'barbara.perri@example.com', codice_fiscale: 'PRRBRB90R41H501T' },
      { id_partecipante: 'P20', nome: 'Davide', cognome: 'Caruso', telefono: '3403344455', email: 'davide.caruso@example.com', codice_fiscale: 'CRSDVD78S41A279G' }
    ]
  },

  {
    id_viaggio: 3,
    nome_viaggio: 'Relax alle Maldive',
    destinazione: 'Maldive',
    tipologia: 'Relax',
    accompagnatore: 'Luca Giordano',
    immagine: 'https://example.com/immagine-maldive.jpg',
    descrizione: 'Un viaggio da sogno alle Maldive, per godersi il mare cristallino, le spiagge bianche e il relax assoluto.',
    data_inizio: '2025-07-01',
    data_fine: '2025-07-10',
    partecipanti: [
      { id_partecipante: 'P21', nome: 'Sara', cognome: 'Martini', telefono: '3456547890', email: 'sara.martini@example.com', codice_fiscale: 'MRTSRA92P56G678X' },
      { id_partecipante: 'P22', nome: 'Giorgio', cognome: 'Alessandro', telefono: '3216549870', email: 'giorgio.alessandro@example.com', codice_fiscale: 'ALSGRG85H11Z905E' },
      { id_partecipante: 'P23', nome: 'Federica', cognome: 'Lombardo', telefono: '3328897766', email: 'federica.lombardo@example.com', codice_fiscale: 'LMBFRC89D52S319B' },
      { id_partecipante: 'P24', nome: 'Paolo', cognome: 'Rossi', telefono: '3305566778', email: 'paolo.rossi@example.com', codice_fiscale: 'RSSPLP78G41B083C' },
      { id_partecipante: 'P25', nome: 'Giuseppe', cognome: 'Perri', telefono: '3389988776', email: 'giuseppe.perri@example.com', codice_fiscale: 'PRRGSN87P43X205F' },
      { id_partecipante: 'P26', nome: 'Alessandra', cognome: 'Ricci', telefono: '3206677889', email: 'alessandra.ricci@example.com', codice_fiscale: 'RCCLSN81H21G478K' },
      { id_partecipante: 'P27', nome: 'Luca', cognome: 'Ferraro', telefono: '3391122334', email: 'luca.ferraro@example.com', codice_fiscale: 'FRRLCA85F27P213L' },
      { id_partecipante: 'P28', nome: 'Marta', cognome: 'Giordano', telefono: '3383344556', email: 'marta.giordano@example.com', codice_fiscale: 'GRDMRT90P62Y499M' },
      { id_partecipante: 'P29', nome: 'Antonio', cognome: 'Giovannini', telefono: '3312288776', email: 'antonio.giovannini@example.com', codice_fiscale: 'GVNNTN82A12B830E' },
      { id_partecipante: 'P30', nome: 'Simone', cognome: 'Vitali', telefono: '3322244668', email: 'simone.vitali@example.com', codice_fiscale: 'VTLMSM84C07L719V' }
    ]
  }
];

export default viaggi;


