/* ============================================================
   ARBEIDSLIVSSPILLET – Molde voksenopplæringssenter
   ============================================================ */

/* ---- QUESTION BANK ---- */
const QUESTIONS = [

  /* ===================== YRKER ===================== */
  // A1
  { id:'y-a1-1', level:'A1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hvem hjelper syke mennesker på sykehuset?',
    opts:['Sykepleiere','Renholdere','Bussjåfører'], ans:0,
    exp:'En sykepleier jobber på sykehus og hjelper syke pasienter.' },

  { id:'y-a1-2', level:'A1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hvem lager maten på en restaurant?',
    opts:['en renholder','en kokk','en bussjåfør'], ans:1,
    exp:'En kokk lager mat på restaurant eller i kantine.' },

  { id:'y-a1-3', level:'A1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'tf', q:'En bussjåfør kjører lastebil.',
    ans:false,
    exp:'En bussjåfør kjører buss. En lastebilsjåfør kjører lastebil.' },

  { id:'y-a1-4', level:'A1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva gjør en renholder?',
    opts:['Kjører buss til jobb','Selger varer i butikk','Vasker og rydder lokaler'], ans:2,
    exp:'En renholder vasker og holder arbeidsplassen ren.' },

  { id:'y-a1-5', level:'A1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hvem har det pedagogiske ansvaret i en barnehage?',
    opts:['en barnehagelærer','en sykepleier','en elektriker'], ans:0,
    exp:'En barnehagelærer jobber i barnehagen og passer på barn.' },

  { id:'y-a1-6', level:'A1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'fill', q:'Jeg jobber som ___ på sykehuset.',
    opts:['bussjåfør','sykepleier','renholder'], ans:1,
    exp:'En sykepleier jobber på sykehus.' },

  // A2
  { id:'y-a2-1', level:'A2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er en «ledig stilling»?',
    opts:['En type lønnsslipp','En plass å sitte og hvile','En jobb du kan søke på'], ans:2,
    exp:'En stilling er en jobb du kan søke på hos en arbeidsgiver.' },

  { id:'y-a2-2', level:'A2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er et vikariat?',
    opts:['En midlertidig jobb','En fast heltidsstilling','En deltidsstilling'], ans:0,
    exp:'Et vikariat er en midlertidig jobb, ofte for en person som er syk eller i permisjon.' },

  { id:'y-a2-3', level:'A2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'tf', q:'For å jobbe som elektriker trenger du fagbrev.',
    ans:true,
    exp:'Riktig! Elektriker er en beskyttet tittel som krever fagbrev.' },

  { id:'y-a2-4', level:'A2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva betyr «heltid»?',
    opts:['Du bestemmer arbeidstiden selv','Du jobber full arbeidsuke','Du jobber halv arbeidsuke'], ans:1,
    exp:'Heltid betyr full arbeidsuke, som i Norge er 37,5/40 timer.' },

  { id:'y-a2-5', level:'A2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'fill', q:'Jeg jobber ___ – det vil si kun noen timer per uke.',
    opts:['heltid','overtid','deltid'], ans:2,
    exp:'Deltid betyr at du jobber færre timer enn full stilling.' },

  { id:'y-a2-6', level:'A2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hvilke yrker er vanlige i helsesektoren?',
    opts:['Sykepleier og hjelpepleier','Bussjåfør og snekker','Kokk og renholder'], ans:0,
    exp:'Sykepleiere og hjelpepleiere er vanlige yrker i helsesektoren.' },

  // B1
  { id:'y-b1-1', level:'B1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er et «fagbrev»?',
    opts:['Et brev du sender til kollegaen','Bevis på fullført fagutdanning','En søknad om ny jobb'], ans:1,
    exp:'Et fagbrev er et offentlig godkjent bevis på at du har fullført en yrkesfaglig utdanning.' },

  { id:'y-b1-2', level:'B1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'tf', q:'I Norge er det vanlig at sjefen har eget kontor atskilt fra de ansatte.',
    ans:false,
    exp:'Norge har flate strukturer. Sjefer og ansatte sitter ofte i åpent landskap og jobber side om side.' },

  { id:'y-b1-3', level:'B1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er forskjellen mellom heltid og deltid?',
    opts:['Deltid og heltid er det samme','Heltid er hjemmekontor, deltid er på kontor','Heltid = full uke (37,5t), deltid = færre timer'], ans:2,
    exp:'Heltid er full stilling (37,5 / 40 t/uke). Deltid er en lavere stillingsprosent.' },

  { id:'y-b1-4', level:'B1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er en «HMS-koordinator»?',
    opts:['Den som koordinerer helse, miljø og sikkerhet','Den ansvarlige for kantinedriften','Den ansvarlige for bedriftsøkonomien'], ans:0,
    exp:'En HMS-koordinator har ansvar for å koordinere HMS-arbeidet på arbeidsplassen.' },

  { id:'y-b1-5', level:'B1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er de mest etterspurte yrkene i Norge nå?',
    opts:['Matproduksjon og bilindustri','Helse, oppvekst og omsorg','Film og musikkindustri'], ans:1,
    exp:'Det er stor etterspørsel etter folk i helse, oppvekst og omsorg.' },

  { id:'y-b1-6', level:'B1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'fill', q:'En ___ er en midlertidig jobb der du erstatter en som er syk.',
    opts:['lærling','fastansatt','vikar'], ans:2,
    exp:'En vikar jobber midlertidig og erstatter en annen ansatt.' },

  // B2
  { id:'y-b2-1', level:'B2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva innebærer «autorisasjon» i helsesektoren?',
    opts:['Offentlig tillatelse til å utøve et helseyrke','En privat avtale med arbeidsgiver','Et fagbrev fra videregående skole'], ans:0,
    exp:'Helsepersonell må søke Helsedirektoratet om autorisasjon for å ha rett til å bruke sin yrkestittel.' },

  { id:'y-b2-2', level:'B2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva betyr «stillingsprosent 80 %»?',
    opts:['Du tjener 80 % av gjeldende minstelønn','Du jobber 80 % av full stilling (ca. 30 t/uke)','Du er ferdig med 80 % av arbeidsdagen'], ans:1,
    exp:'80 % stilling betyr 80 % av normalarbeidstiden (37,5 t), som er ca. 30 timer per uke.' },

  { id:'y-b2-3', level:'B2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er «en prøvetid»?',
    opts:['En ferie du får ved starten av ny jobb','En opplæringsperiode finansiert av NAV','En periode på inntil 6 måneder med enklere oppsigelse'], ans:2,
    exp:'Prøvetid er maks 6 måneder. I denne perioden kan begge parter si opp med kortere frist.' },

  { id:'y-b2-4', level:'B2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er en «tariffavtale»?',
    opts:['Avtale om lønn og vilkår mellom fagforening og arbeidsgiver','Avtale om reise og overnatting i jobbsammenheng','Avtale om prisnivå i butikk og handel'], ans:0,
    exp:'Tariffavtaler fastsetter minstelønn, arbeidstid og andre vilkår for en bransje eller bedrift.' },

  { id:'y-b2-5', level:'B2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'tf', q:'Arbeidsgiver kan avslutte et arbeidsforhold uten grunn i prøvetiden.',
    ans:false,
    exp:'Nei – oppsigelse i prøvetiden må fortsatt være saklig begrunnet, jf. Arbeidsmiljøloven § 15-6.' },

  { id:'y-b2-6', level:'B2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva betyr «permisjon»?',
    opts:['En oppsigelse på eget initiativ','Godkjent fri med rett til å komme tilbake','En bonus for godt arbeid'], ans:1,
    exp:'Permisjon er godkjent fravær fra jobben. Du har rett til å komme tilbake til stillingen din etterpå.' },

  /* ===================== HMS ===================== */
  // A1
  { id:'h-a1-1', level:'A1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva bruker du for å beskytte hodet på jobb?',
    opts:['Hansker','Støvler','Hjelm'], ans:2,
    exp:'En hjelm beskytter hodet mot skader, for eksempel på byggeplassen.' },

  { id:'h-a1-2', level:'A1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva gjør du ved brann på arbeidsplassen?',
    opts:['Ringer 110','Ringer sjefen','Drikker kaldt vann'], ans:0,
    exp:'110 er brannvesenet. Ring alltid 110 ved brann!' },

  { id:'h-a1-3', level:'A1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'tf', q:'Du skal alltid bruke verneutstyr på farlige arbeidsplasser.',
    ans:true,
    exp:'Riktig! Verneutstyr beskytter deg mot skader.' },

  { id:'h-a1-4', level:'A1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva betyr et rødt varselskilt?',
    opts:['Her er det god mat','Her er det farlig','Her er det parkering'], ans:1,
    exp:'Røde varselskilter betyr fare eller forbud. Vær alltid forsiktig!' },

  { id:'h-a1-5', level:'A1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'tf', q:'Du kan jobbe uten verneutstyr hvis du har det travelt.',
    ans:false,
    exp:'Nei! Verneutstyr skal alltid brukes, uansett hvor travelt det er.' },

  { id:'h-a1-6', level:'A1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva bruker du for å beskytte hendene?',
    opts:['Vernebriller','Hjelm','Hansker'], ans:2,
    exp:'Hansker beskytter hendene mot kjemikalier, varme og skarpe gjenstander.' },

  // A2
  { id:'h-a2-1', level:'A2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva betyr forkortelsen HMS?',
    opts:['Helse, Miljø og Sikkerhet','Hjelm, Maske og Støvler','Helse, Mat og Skatt'], ans:0,
    exp:'HMS = Helse, Miljø og Sikkerhet. Alle norske virksomheter er pålagt å jobbe med HMS.' },

  { id:'h-a2-2', level:'A2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er en nødutgang?',
    opts:['En dør man bruker i hverdagen','En dør som brukes ved nødsituasjoner','Bakdøren til kantinen'], ans:1,
    exp:'Nødutgangen er den nærmeste veien ut ved brann eller annen nødsituasjon.' },

  { id:'h-a2-3', level:'A2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva gjør du hvis du ser en farlig situasjon på jobb?',
    opts:['Ignorerer situasjonen','Forlater arbeidsplassen','Sier fra til nærmeste leder'], ans:2,
    exp:'Du plikter å melde fra om farlige situasjoner til din leder umiddelbart.' },

  { id:'h-a2-4', level:'A2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'fill', q:'Jeg skal alltid bruke ___ når jeg jobber med kjemikalier.',
    opts:['verneutstyr','mobiltelefon','kaffe'], ans:0,
    exp:'Verneutstyr beskytter deg mot farlige kjemikalier.' },

  { id:'h-a2-5', level:'A2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'tf', q:'Arbeidsgiver har ansvar for å gi deg riktig verneutstyr.',
    ans:true,
    exp:'Riktig! Arbeidsgiver er ansvarlig for at ansatte har nødvendig verneutstyr.' },

  { id:'h-a2-6', level:'A2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er verneutstyr?',
    opts:['Utstyr for matlaging på jobb','Utstyr som beskytter deg mot skader','Utstyr for å rydde og holde orden'], ans:1,
    exp:'Verneutstyr er alt utstyr som beskytter deg mot skader på jobb.' },

  // B1
  { id:'h-b1-1', level:'B1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er et «verneombud»?',
    opts:['En vakt som beskytter bygningen','En bedriftslege på arbeidsplassen','En representant for ansatte i HMS-saker'], ans:2,
    exp:'Verneombudet velges av de ansatte og representerer dem i HMS-spørsmål.' },

  { id:'h-b1-2', level:'B1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er «psykososialt arbeidsmiljø»?',
    opts:['Det sosiale og psykologiske arbeidsmiljøet','Den fysiske sikkerheten på jobben','Kantinematens kvalitet og pauser'], ans:0,
    exp:'Psykososialt arbeidsmiljø handler om relasjoner, trivsel, mobbing og stress på jobb.' },

  { id:'h-b1-3', level:'B1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'tf', q:'Ansatte skal melde fra om arbeidsulykker til Arbeidstilsynet.',
    ans:true,
    exp:'Riktig! Alvorlige arbeidsulykker skal meldes til Arbeidstilsynet og politiet.' },

  { id:'h-b1-4', level:'B1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er Arbeidstilsynet?',
    opts:['En fagforening for tilsynsarbeidere','En statlig etat som fører tilsyn med arbeidsmiljøloven','Et privat selskap som kontrollerer HMS'], ans:1,
    exp:'Arbeidstilsynet er et statlig tilsyn under Arbeids- og inkluderingsdepartementet.' },

  { id:'h-b1-5', level:'B1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er et «HMS-avvik»?',
    opts:['En bonusordning for godt HMS-arbeid','En ny paragraf i HMS-regelverket','En hendelse som bryter med HMS-krav og skal meldes'], ans:2,
    exp:'Avvik skal registreres og følges opp for å forhindre nye hendelser.' },

  { id:'h-b1-6', level:'B1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'fill', q:'Alle virksomheter i Norge er pålagt å ha et system for ___.',
    opts:['internkontroll','lønnsslipper','ferieavvikling'], ans:0,
    exp:'Internkontrollforskriften krever at alle virksomheter har systematisk HMS-arbeid.' },

  // B2
  { id:'h-b2-1', level:'B2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er Arbeidsmiljøloven (AML)?',
    opts:['En lov om pensjon for arbeidstakere over 67 år','Loven som regulerer rettigheter og plikter i arbeidslivet','En lov om skatteregler for ansatte i Norge'], ans:1,
    exp:'AML er den sentrale loven om arbeidsmiljø, stillingsvern og arbeidsforhold i Norge.' },

  { id:'h-b2-2', level:'B2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er «tilretteleggingsplikten»?',
    opts:['Plikt til å tilrettelegge møterom ved møter med mer enn 5 personer','Plikt til å tilby kantinemat til alle fastansatte','Plikt til å tilpasse arbeidet for ansatte med nedsatt arbeidsevne'], ans:2,
    exp:'Arbeidsgiver plikter å tilrettelegge arbeidsoppgaver og arbeidssted for ansatte med nedsatt funksjonsevne.' },

  { id:'h-b2-3', level:'B2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'tf', q:'Ansatte kan nekte å utføre arbeid de mener er direkte farlig for liv og helse.',
    ans:true,
    exp:'Riktig! AML § 2-3 gir ansatte rett til å avbryte arbeid ved alvorlig fare.' },

  { id:'h-b2-4', level:'B2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er en «IA-avtale» (Inkluderende Arbeidsliv)?',
    opts:['Avtale mellom virksomhet og NAV for å forebygge sykefravær','Avtale om internasjonal rekruttering og ansettelse','Avtale om datasikkerhet og IT-løsninger'], ans:0,
    exp:'IA-virksomheter forplikter seg til å jobbe aktivt med sykefraværsforebygging og inkludering.' },

  { id:'h-b2-5', level:'B2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva innebærer arbeidsgivers «internkontrollplikt»?',
    opts:['Å overvåke og kontrollere ansattes private aktiviteter','Systematisk HMS-arbeid dokumentert i et styringssystem','Å sende daglige rapporter til Arbeidstilsynet'], ans:1,
    exp:'Internkontrollforskriften pålegger arbeidsgiver å ha et dokumentert HMS-system.' },

  { id:'h-b2-6', level:'B2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er «SHA-plan» i byggeprosjekter?',
    opts:['En oversikt over alle ansattes helsetilstand','En plan for opplæring av nyansatte i byggebransjen','En plan for Sikkerhet, Helse og Arbeidsmiljø i byggeprosjekter'], ans:2,
    exp:'SHA-plan er obligatorisk i byggeprosjekter og skal beskrive HMS-tiltak gjennom hele prosjektet.' },

  /* ===================== SKATT ===================== */
  // A1
  { id:'s-a1-1', level:'A1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er skatt?',
    opts:['En betaling til staten','En bonus fra sjefen','Penger på bankkontoen'], ans:0,
    exp:'Skatt er penger du betaler til staten. Staten bruker pengene på skoler, sykehus og veier.' },

  { id:'s-a1-2', level:'A1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hvem administrerer skatt i Norge?',
    opts:['NAV','Skatteetaten','Politiet'], ans:1,
    exp:'Skatteetaten er den statlige etaten som har ansvar for skatt i Norge.' },

  { id:'s-a1-3', level:'A1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'tf', q:'Du betaler skatt av lønnen din.',
    ans:true,
    exp:'Riktig! En del av lønnen din går til skatt. Arbeidsgiver trekker skatten automatisk.' },

  { id:'s-a1-4', level:'A1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er et skattekort?',
    opts:['Et offentlig ID-kort','Et kredittkort fra banken','Et dokument som viser din skatteprosent'], ans:2,
    exp:'Skattekortet forteller arbeidsgiver hvor mye skatt som skal trekkes fra lønnen din.' },

  { id:'s-a1-5', level:'A1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'tf', q:'Du trenger ikke skattekort for å jobbe i Norge.',
    ans:false,
    exp:'Du må ha skattekort for å jobbe i Norge. Du henter det på skatteetaten.no.' },

  { id:'s-a1-6', level:'A1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hvilken viktig informasjon viser lønnsslippen din?',
    opts:['Lønnen din og skattetrekket','Hjemmeadressen din','Din utdanning og CV'], ans:0,
    exp:'Lønnsslippen viser bruttoinntekt, skattetrekk og nettoinntekt (det du faktisk får utbetalt).' },

  // A2
  { id:'s-a2-1', level:'A2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva betyr «skattetrekk»?',
    opts:['NAV betaler skatten automatisk for deg','Arbeidsgiver trekker skatten fra lønnen din','Du betaler samlet skatt én gang per år'], ans:1,
    exp:'Arbeidsgiver trekker skatten fra lønnen din før du mottar pengene. Dette kalles skattetrekk.' },

  { id:'s-a2-2', level:'A2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er feriepenger?',
    opts:['Ekstra lønn for å jobbe i ferien','En frivillig bonus fra arbeidsgiver','Penger opptjent i arbeidsåret, utbetalt i ferien'], ans:2,
    exp:'Feriepenger er 10,2 % av lønnen du tjente forrige år. De utbetales vanligvis i juni.' },

  { id:'s-a2-3', level:'A2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'fill', q:'Jeg henter skattekortet mitt på ___ sine nettsider.',
    opts:['Skatteetaten','NAV','politiet'], ans:0,
    exp:'Gå til skatteetaten.no for å hente eller endre skattekortet ditt.' },

  { id:'s-a2-4', level:'A2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er en skattemelding?',
    opts:['En melding om ny skatteregel','En årlig oversikt over inntekt og betalt skatt','En faktura fra Skatteetaten'], ans:1,
    exp:'Skattemeldingen (selvangivelsen) viser all inntekt og skatt for ett år. Du leverer den hvert vår.' },

  { id:'s-a2-5', level:'A2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'tf', q:'Alle som jobber i Norge må ha et norsk personnummer eller D-nummer.',
    ans:true,
    exp:'Riktig! Alle som jobber i Norge trenger personnummer eller D-nummer for å betale skatt.' },

  { id:'s-a2-6', level:'A2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva bruker staten skattepengene til?',
    opts:['Lønn til politikere og direktører','Reklame og turisme i utlandet','Sykehus, skoler og velferdstjenester'], ans:2,
    exp:'Skattepenger finansierer velferdsstaten – sykehus, skoler, NAV, politiet og mye mer.' },

  // B1
  { id:'s-b1-1', level:'B1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva brukes skattekortet til?',
    opts:['Det forteller arbeidsgiver din skatteprosent','Det brukes som ID og adgangskort på jobb','Det gir rett til trygde- og sosialytelser'], ans:0,
    exp:'Skattekortet inneholder din skatteprosent eller trekkprosent, som arbeidsgiver bruker.' },

  { id:'s-b1-2', level:'B1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er et D-nummer?',
    opts:['Et midlertidig skattenummer brukt ved ansettelse','Et midlertidig personnummer for utenlandske statsborgere','NAVs saksnummer og journalnummer for deg'], ans:1,
    exp:'D-nummeret brukes til skatt og andre registreringer for utenlandske arbeidstakere.' },

  { id:'s-b1-3', level:'B1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'tf', q:'Du kan endre skattekortet ditt midt i året hvis inntekten din endrer seg.',
    ans:true,
    exp:'Riktig! Endre skattekortet på skatteetaten.no hvis du bytter jobb eller får ny inntekt.' },

  { id:'s-b1-4', level:'B1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er «et minstefradrag»?',
    opts:['Den laveste mulige skatteprosenten','En støtteytelse fra NAV ved lav inntekt','Et standardfradrag som reduserer den skattemessige inntekten'], ans:2,
    exp:'Minstefradraget er et automatisk fradrag de fleste lønnstakere får, for å redusere skatten.' },

  { id:'s-b1-5', level:'B1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva skjer hvis du betaler for mye skatt i løpet av året?',
    opts:['Du får pengene tilbake ved skatteoppgjøret','Pengene doneres til veldedighet','De overføres automatisk til neste år'], ans:0,
    exp:'Ved skatteoppgjøret (sommeren) ser du om du har penger til gode eller restskatt.' },

  { id:'s-b1-6', level:'B1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'fill', q:'Hvis du tjener mer enn du antas å tjene, bør du ___ skattekortet ditt.',
    opts:['slette','endre','ignorere'], ans:1,
    exp:'Endre skattekortet på skatteetaten.no for å unngå restskatt.' },

  // B2
  { id:'s-b2-1', level:'B2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva betyr «et skattefradrag»?',
    opts:['Et beløp som trekkes direkte fra lønnen','Et straffegebyr fra Skatteetaten','Et beløp som reduserer den skattemessige inntekten'], ans:2,
    exp:'Skattefradrag reduserer skattegrunnlaget ditt – for eksempel fradrag for fagforeningskontingent.' },

  { id:'s-b2-2', level:'B2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er «kildeskatt»?',
    opts:['En flat skatt for utenlandske arbeidstakere istefor ordinær beskatning','En skatt på vann og naturressurser','En kommunal skatt i tillegg til statsskatten'], ans:0,
    exp:'Kildeskatteordningen gir utenlandske arbeidstakere en forenklet beskatning på 25 %.' },

  { id:'s-b2-3', level:'B2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'tf', q:'Arbeidsgiver kan velge om de vil rapportere lønnsutbetalinger til Skatteetaten.',
    ans:false,
    exp:'Arbeidsgiver er lovpålagt å rapportere alle lønnsutbetalinger via a-meldingen hver måned.' },

  { id:'s-b2-4', level:'B2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er en «a-melding»?',
    opts:['En melding til Arbeidstilsynet ved ny ansettelse','En månedlig rapport til Skatteetaten om ansattes lønn','Et trygdeskjema som sendes til NAV'], ans:1,
    exp:'A-meldingen sendes månedlig til Skatteetaten/NAV/SSB og inneholder lønns- og ansettelsesdata.' },

  { id:'s-b2-5', level:'B2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er «trinnskatt»?',
    opts:['En flat skatt på all inntekt uansett størrelse','En lokal kommuneskatt på eiendom','En progressiv skatt der høyere inntekt gir høyere prosent'], ans:2,
    exp:'Trinnskatten er progressiv: jo mer du tjener, jo høyere prosent betaler du på toppen.' },

  { id:'s-b2-6', level:'B2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er «PAYE-ordningen» (Pay As You Earn)?',
    opts:['En ordning for utenlandske arbeidstakere med flat skatt (25 %)','En ordning for selvstendig næringsdrivende','Et lønnssystem brukt i offentlig sektor'], ans:0,
    exp:'PAYE gir utenlandske arbeidstakere forenklet skattlegging uten å levere skattemelding.' },

  /* ===================== EGENMELDING ===================== */
  // A1
  { id:'e-a1-1', level:'A1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva bør du gjøre den første dagen du er syk og ikke kan jobbe?',
    opts:['Ingenting','Ringe arbeidsgiveren din','Dra til legen'], ans:1,
    exp:'Du skal alltid ringe eller sende melding til arbeidsgiver så tidlig som mulig.' },

  { id:'e-a1-2', level:'A1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er en egenmelding?',
    opts:['Legen skriver at du var syk','NAV skriver at du var syk','Du skriver selv at du var syk'], ans:2,
    exp:'Egenmelding er når du selv melder fra om sykdom, uten legeerklæring.' },

  { id:'e-a1-3', level:'A1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'tf', q:'Du kan bruke egenmelding hvis du er syk én dag.',
    ans:true,
    exp:'Riktig! Egenmelding kan brukes ved korte sykdomsperioder.' },

  { id:'e-a1-4', level:'A1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er en sykemelding?',
    opts:['Et dokument fra legen som sier du er syk','Et dokument du skriver selv','Et brev fra NAV'], ans:0,
    exp:'Sykemelding er en legeerklæring som bekrefter at du er for syk til å jobbe.' },

  { id:'e-a1-5', level:'A1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'tf', q:'Du trenger alltid legeerklæring etter én dags sykdom.',
    ans:false,
    exp:'Nei! Du kan bruke egenmelding de første dagene. Lege er bare nødvendig etter 3 dager.' },

  { id:'e-a1-6', level:'A1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'fill', q:'Når jeg er syk, ringer jeg til ___.',
    opts:['legen min','arbeidsgiveren min','politiet'], ans:1,
    exp:'Du skal alltid ringe arbeidsgiveren din første dag du er syk.' },

  // A2
  { id:'e-a2-1', level:'A2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hvor mange dager kan du bruke egenmelding i strekk?',
    opts:['Opptil 30 kalenderdager','Kun én enkelt dag av gangen','Opptil 3 sammenhengende dager'], ans:2,
    exp:'Du kan bruke egenmelding i inntil 3 dager av gangen. I noen tilfeller gjelder 16 dager.' },

  { id:'e-a2-2', level:'A2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Når du er syk i mer enn 3 dager, hva trenger du?',
    opts:['Sykemelding fra lege','En e-post fra familien','Tillatelse fra NAV'], ans:0,
    exp:'Etter 3 dager med egenmelding trenger du sykemelding fra lege.' },

  { id:'e-a2-3', level:'A2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'tf', q:'Du kan bruke egenmelding for å ta fri til bursdagsfeiring.',
    ans:false,
    exp:'Egenmelding brukes kun ved sykdom, ikke til feiring eller andre private aktiviteter.' },

  { id:'e-a2-4', level:'A2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hvem betaler sykepenger de første 16 dagene?',
    opts:['NAV','Arbeidsgiver','Legen'], ans:1,
    exp:'Arbeidsgiver betaler sykepenger de første 16 kalenderdagene. Deretter overtar NAV.' },

  { id:'e-a2-5', level:'A2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'fill', q:'Jeg bruker ___ når jeg er syk i 1–3 dager uten å gå til lege.',
    opts:['sykemelding','permisjon','egenmelding'], ans:2,
    exp:'Egenmelding brukes for korte sykdomsperioder uten behov for legeerklæring.' },

  { id:'e-a2-6', level:'A2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er sykepenger?',
    opts:['Penger fra NAV eller arbeidsgiver når du er syk','En bonus for å ha lite sykefravær','Penger til medisiner og legebesøk'], ans:0,
    exp:'Sykepenger erstatter lønn når du er syk og ikke kan jobbe.' },

  // B1
  { id:'e-b1-1', level:'B1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er «arbeidsgiverperioden» ved sykdom?',
    opts:['En prøvetid for nye ansatte i bedriften','De første 16 dagene arbeidsgiver betaler sykepenger','Perioden NAV bruker til å vurdere søknaden'], ans:1,
    exp:'I arbeidsgiverperioden (16 dager) betaler arbeidsgiver 100 % sykepenger.' },

  { id:'e-b1-2', level:'B1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'tf', q:'Misbruk av egenmelding kan føre til at arbeidsgiver krever legeerklæring fra dag 1.',
    ans:true,
    exp:'Riktig! Arbeidsgiver kan innskrenke retten til egenmelding ved misbruk.' },

  { id:'e-b1-3', level:'B1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er en «oppfølgingsplan»?',
    opts:['En plan fra NAV om fremtidig stønad','En karriereplan laget ved slutten av jobben','En plan for tilbakekomst til arbeid, laget av arbeidsgiver og ansatt'], ans:2,
    exp:'Oppfølgingsplan lages senest innen 4 uker og viser hva som skal til for å komme tilbake.' },

  { id:'e-b1-4', level:'B1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva skjer etter 52 ukers sykemelding?',
    opts:['Sykepengene stanser og NAV vurderer arbeidsevnen din','Du mister jobben din automatisk','Sykepengene dobles som kompensasjon'], ans:0,
    exp:'Etter 52 uker stanser sykepengene. NAV vil avklare din arbeidsevne og fremtidige muligheter.' },

  { id:'e-b1-5', level:'B1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva menes med «karensdager»?',
    opts:['Dager med ekstra sykepenger ved alvorlig sykdom','Sykedager uten rett til sykepenger','Fridager du får etter endt sykemelding'], ans:1,
    exp:'I Norge har vi ingen karensdager – du får sykepenger fra første sykedag.' },

  { id:'e-b1-6', level:'B1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'fill', q:'Arbeidsgiver og sykmeldt ansatt skal lage en ___ innen 4 uker.',
    opts:['arbeidsavtale','skattemelding','oppfølgingsplan'], ans:2,
    exp:'Oppfølgingsplanen dokumenterer hva som kan gjøres for å få den syke tilbake i arbeid.' },

  // B2
  { id:'e-b2-1', level:'B2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er en «gradert sykemelding»?',
    opts:['En sykemelding der du jobber delvis og er delvis sykmeldt','En sykemelding med prosentgradering fra legen','En permanent uføremelding utstedt av spesialist'], ans:0,
    exp:'Gradert sykmelding (f.eks. 50 %) betyr at du jobber halvparten og er sykmeldt for resten.' },

  { id:'e-b2-2', level:'B2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva innebærer «aktivitetsplikt» ved sykdom?',
    opts:['Krav om daglig trening under sykmelding','Plikt til å forsøke arbeidsaktiviteter om ikke medisinen hindrer det','Krav om å dokumentere alle daglige aktiviteter for NAV'], ans:1,
    exp:'Aktivitetsplikten skal hjelpe sykmeldte tilbake i arbeid raskere.' },

  { id:'e-b2-3', level:'B2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'tf', q:'En arbeidstaker kan ikke sies opp utelukkende på grunn av sykdom.',
    ans:true,
    exp:'Riktig! AML § 15-8 gir sterkt vern mot oppsigelse de første 12 månedene med sykdom.' },

  { id:'e-b2-4', level:'B2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er «dialogmøte 1» i sykefraværsoppfølgingen?',
    opts:['Det første formelle møtet med din NAV-veileder','Et møte initiert av bedriftslegen','Et møte mellom sykmeldt og arbeidsgiver innen 7 uker'], ans:2,
    exp:'Dialogmøte 1 er pålagt innen 7 uker og skal gjennomgå oppfølgingsplanen.' },

  { id:'e-b2-5', level:'B2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er «AAP» (Arbeidsavklaringspenger)?',
    opts:['Ytelse fra NAV mens arbeidsevnen din avklares','En ansettelsesavtale fra Arbeidsgiverforeningen','Et tilskudd til videre- og etterutdanning'], ans:0,
    exp:'AAP gis når du ikke lenger har rett på sykepenger og NAV avklarer hva du kan jobbe med.' },

  { id:'e-b2-6', level:'B2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er arbeidsgivers plikt ved 4 ukers sykdom?',
    opts:['Umiddelbart varsle NAV og Arbeidstilsynet','Lage oppfølgingsplan i samarbeid med den sykmeldte','Erstatte den sykmeldte med en ny ansatt'], ans:1,
    exp:'Innen 4 uker skal arbeidsgiver utarbeide oppfølgingsplan i samarbeid med arbeidstaker.' },

  /* ===================== RETTIGHETER OG PLIKTER ===================== */
  // A1
  { id:'r-a1-1', level:'A1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Har du rett til pauser på jobb?',
    opts:['Nei','Bare av og til','Ja'], ans:2,
    exp:'Etter 5,5 timers arbeid har du rett til minst én pause.' },

  { id:'r-a1-2', level:'A1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'tf', q:'Du har rett til ferie hvert år i Norge.',
    ans:true,
    exp:'Riktig! I Norge har alle ansatte rett til minst 4 uker og 1 dag ferie hvert år.' },

  { id:'r-a1-3', level:'A1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hvilke av alternativene er din plikt som ansatt?',
    opts:['Møte opp på jobb til riktig tid','Kjøpe lunsj til sjefen','Vaske sjefen sin bil'], ans:0,
    exp:'Du plikter å møte opp til arbeid til avtalt tid og utføre jobben din.' },

  { id:'r-a1-4', level:'A1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva bør du gjøre hvis du skal komme for sent til jobb?',
    opts:['Ingenting','Si fra til arbeidsgiver','Sende melding til familien'], ans:1,
    exp:'Du plikter å varsle arbeidsgiver hvis du skal komme for sent.' },

  { id:'r-a1-5', level:'A1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'tf', q:'Du kan komme og gå fra jobb når du vil.',
    ans:false,
    exp:'Nei! Du har avtalt arbeidstid som du må overholde.' },

  { id:'r-a1-6', level:'A1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'fill', q:'Normal arbeidsuke i Norge er ___ timer.',
    opts:['45','50','37,5'], ans:2,
    exp:'Normal arbeidstid i Norge er 37,5 timer per uke for fulltidsansatte. Noen har også 40 timers arbeidsuke.' },

  // A2
  { id:'r-a2-1', level:'A2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er en oppsigelsestid?',
    opts:['Perioden fra du sier opp til du slutter','Fristen for å søke ny jobb','Tiden du har på å svare på et tilbud'], ans:0,
    exp:'Oppsigelsestid er perioden du fortsatt jobber etter at du eller arbeidsgiver har sagt opp.' },

  { id:'r-a2-2', level:'A2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'tf', q:'Arbeidstaker har alltid rett til skriftlig arbeidsavtale.',
    ans:true,
    exp:'Riktig! Arbeidsgiver plikter å gi alle ansatte en skriftlig arbeidsavtale.' },

  { id:'r-a2-3', level:'A2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva forbyr diskrimineringsloven på arbeidsplassen?',
    opts:['Å ha ulike meninger','Å behandle folk dårligere pga. kjønn, religion, alder osv.','Å ta pauser oftere enn avtalt'], ans:1,
    exp:'Du kan ikke diskrimineres på grunn av kjønn, alder, etnisitet, religion eller funksjonsnedsettelse.' },

  { id:'r-a2-4', level:'A2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er «overtid»?',
    opts:['Arbeid du gjør gratis og frivillig','Ekstra ferie som belønning for mye arbeid','Arbeid utover normal avtalt arbeidstid'], ans:2,
    exp:'Overtid er arbeid utover 37,5 timer per uke. Du har krav på minst 40 % tillegg.' },

  { id:'r-a2-5', level:'A2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'fill', q:'Du har rett til ___ pause etter 8 timers arbeid.',
    opts:['30 minutters','5 minutters','2 timers'], ans:0,
    exp:'Etter 8 timers sammenhengende arbeid har du rett til minst 30 minutters pause.' },

  { id:'r-a2-6', level:'A2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er din plikt hvis du vet at du ikke kan møte på jobb?',
    opts:['Ingenting, det ordner seg selv','Varsle arbeidsgiver så raskt som mulig','Sende en melding til kollegaen din'], ans:1,
    exp:'Du plikter å varsle arbeidsgiver umiddelbart ved fravær.' },

  // B1
  { id:'r-b1-1', level:'B1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er formålet med Arbeidsmiljøloven?',
    opts:['Fastsette minstelønn for alle bransjer','Regulere handelen mellom norske bedrifter','Sikre forsvarlig arbeidsmiljø og verne arbeidstakerne'], ans:2,
    exp:'AML skal sikre trygge arbeidsforhold og beskytte arbeidstakeres helse og rettigheter.' },

  { id:'r-b1-2', level:'B1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'tf', q:'Arbeidsgiver kan tvinge deg til ubegrenset overtid.',
    ans:false,
    exp:'Nei! Arbeidsmiljøloven setter grenser for maksimalt antall overtidstimer per uke og år.' },

  { id:'r-b1-3', level:'B1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er «varsling» i arbeidslivet?',
    opts:['Å si fra om kritikkverdige forhold på arbeidsplassen','Å varsle om brann eller farlige situasjoner','Å gi beskjed om ferie og planlagt fravær'], ans:0,
    exp:'Varsling er å melde fra om kritikkverdige forhold – du er beskyttet mot gjengjeldelse ved varsling.' },

  { id:'r-b1-4', level:'B1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva menes med "rett til medbestemmelse"?',
    opts:['At alle ansatte bestemmer like mye som sjefen','Ansatte og tillitsvalgte kan delta i beslutningsprosesser','At ansatte selv velger sin daglige arbeidstid'], ans:1,
    exp:'Norsk lov gir ansatte og tillitsvalgte rett til informasjon og medvirkning i bedriften.' },

  { id:'r-b1-5', level:'B1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er «ferieloven»?',
    opts:['En lov om åpningstider for dagligvarebutikker','En lov om reiser og turisme til utlandet','Loven som gir alle rett til minst 25 virkedagers ferie'], ans:2,
    exp:'Ferieloven sikrer alle ansatte minimum 25 virkedager (ca. 4 uker + 1 dag) ferie.' },

  { id:'r-b1-6', level:'B1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'fill', q:'Arbeidsavtalen skal alltid inngås ___ mellom arbeidsgiver og arbeidstaker.',
    opts:['skriftlig','muntlig','digitalt'], ans:0,
    exp:'Arbeidsmiljøloven krever skriftlig arbeidsavtale for alle ansettelsesforhold.' },

  // B2
  { id:'r-b2-1', level:'B2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva menes med at det er et «sterkt stillingsvern» i Norge?',
    opts:['At man aldri kan sies opp uansett atferd','Arbeidstaker kan bare sies opp på saklig grunnlag','At oppsigelse må godkjennes av Stortinget'], ans:1,
    exp:'Norsk stillingsvern er sterkt: arbeidsgiver må ha saklig grunn (økonomi, adferd el. egnethet).' },

  { id:'r-b2-2', level:'B2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva menes med «fortrinnsrett til en stilling»?',
    opts:['At seniorer alltid har fortrinnsrett til ledige stillinger','At alle ansatte må søke interne stillinger først','At deltidsansatte har fortrinnsrett til utvidet stilling'], ans:2,
    exp:'AML § 14-3 gir deltidsansatte fortrinnsrett til utvidet stilling fremfor nyansettelse.' },

  { id:'r-b2-3', level:'B2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'tf', q:'Arbeidsgiver kan fritt endre ansettelsesvilkår uten å informere ansatte.',
    ans:false,
    exp:'Nei! Vesentlige endringer i arbeidsavtalen krever avtale med arbeidstaker og eventuelt tillitsvalgt.' },

  { id:'r-b2-4', level:'B2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er «kollektiv arbeidsrett»?',
    opts:['Regler om fagforeninger, tariffavtaler og kollektive forhandlinger','Regler om rettigheter ved bruk av offentlig transport','Felles arbeidsregler for grupper av samarbeidende bedrifter'], ans:0,
    exp:'Kollektiv arbeidsrett regulerer forholdet mellom fagforeninger, arbeidsgivere og deres organisasjoner.' },

  { id:'r-b2-5', level:'B2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva menes med «bedriftsdemokratiet» i norsk rett?',
    opts:['Direktedemokrati der alle ansatte stemmer','Ansattes rett til å velge styrerepresentanter','At bedriften støtter og finansierer lokalt demokrati'], ans:1,
    exp:'I større bedrifter har ansatte rett til styrerepresentasjon etter aksjeloven og representasjonsforskriften.' },

  { id:'r-b2-6', level:'B2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er en viktig bestemmelse i «likestillings- og diskrimineringsloven»?',
    opts:['En lov om lik lønn kun for offentlig sektor','En lov om lik arbeidstid for alle bransjer','Loven som forbyr diskriminering og sikrer likeverd for alle'], ans:2,
    exp:'Loven dekker alle diskrimineringsgrunnlag og gjelder for hele arbeidslivet.' },

  /* ===================== ARBEIDSKULTUR ===================== */
  // A1
  { id:'ak-a1-1', level:'A1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Kaller mange norske ansatte sjefen sin med fornavn?',
    opts:['Ja','Nei, alltid etternavn','De bruker «herr» eller «fru»'], ans:0,
    exp:'Ja! I Norge er det vanlig og akseptert å kalle sjefen ved fornavn.' },

  { id:'ak-a1-2', level:'A1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'tf', q:'Det er viktig å komme presist på jobb i Norge.',
    ans:true,
    exp:'Riktig! Punktlighet er viktig i norsk arbeidskultur. Kom i tide – helst litt før.' },

  { id:'ak-a1-3', level:'A1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Kan du si din mening på jobb i Norge, selv om sjefen er til stede?',
    opts:['Nei, aldri på egenhånd','Ja, det er vanlig og oppmuntres','Bare når sjefen ber deg om det'], ans:1,
    exp:'I Norge oppfordres ansatte til å dele sin mening. Åpen dialog er en viktig verdi.' },

  { id:'ak-a1-4', level:'A1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Er det greit å ta pause og spise lunsj i Norge?',
    opts:['Nei, du skal alltid jobbe','Bare ledere og sjefer har lov','Ja, alle ansatte har rett til pause'], ans:2,
    exp:'Alle ansatte har rett til pause. Lunsj er en naturlig del av arbeidsdagen.' },

  { id:'ak-a1-5', level:'A1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'tf', q:'I Norge er det vanlig at alle snakker like mye i et møte, uansett tittel.',
    ans:true,
    exp:'Riktig! Norske møter er preget av likhet. Alle bidrag er velkomne.' },

  { id:'ak-a1-6', level:'A1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'fill', q:'I Norge er det vanlig å kalle sjefen sin ved ___.',
    opts:['fornavn','etternavn','tittel'], ans:0,
    exp:'Bruk av fornavn til sjefen er et tegn på den flate strukturen i norsk arbeidsliv.' },

  // A2
  { id:'ak-a2-1', level:'A2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva betyr «flat struktur» på en arbeidsplass?',
    opts:['Bygningen har bare ett etasjeplan','Det er kort avstand mellom ledere og ansatte','Alle ansatte tjener nøyaktig likt'], ans:1,
    exp:'Flat struktur betyr at det er kort avstand mellom ansatte og ledelse – og lite hierarki.' },

  { id:'ak-a2-2', level:'A2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva er vanlige temaer i lunsjpausen i Norge?',
    opts:['Politikk og religion','Kollegenes privatliv og hemmeligheter','Vær, helg, TV og fritid'], ans:2,
    exp:'Litt prat om vær, helg, natur og hverdagsliv er vanlig.' },

  { id:'ak-a2-3', level:'A2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'tf', q:'I Norge sier folk «hei» og bruker fornavn til alle, uansett stilling.',
    ans:true,
    exp:'Riktig! Uformell hilsing og fornavn er normen på norske arbeidsplasser.' },

  { id:'ak-a2-4', level:'A2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva menes med «dugnadsånd»?',
    opts:['Frivillig fellesarbeid til nytte for alle','En tradisjonell type norsk mat','En ny ordning for arbeidstid'], ans:0,
    exp:'Dugnad er en norsk tradisjon med frivillig fellesarbeid. Denne ånden preger mange arbeidsplasser.' },

  { id:'ak-a2-5', level:'A2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva menes med «work-life balance»?',
    opts:['Et treningsprogram tilpasset arbeidere','Balanse mellom jobb og privatliv','En regel om arbeidstid og pauser'], ans:1,
    exp:'Norge scorer høyt på work-life balance. Privatliv og familietid er verdsatt.' },

  { id:'ak-a2-6', level:'A2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'fill', q:'Norge har ___ strukturer på arbeidsplassen – det vil si lite hierarki.',
    opts:['bratte','steile','flate'], ans:2,
    exp:'Flate strukturer betyr at det er kort avstand mellom leder og ansatt.' },

  // B1
  { id:'ak-b1-1', level:'B1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva kjennetegner den norske arbeidsmodellen?',
    opts:['Trepartssamarbeid mellom stat, arbeidsgiver og fagforeninger','Streng hierarkisk struktur og individuell lydighet','Individuelle forhandlinger uten involvering av fagforeninger'], ans:0,
    exp:'Den norske modellen er basert på trepartssamarbeid og tillit mellom partene.' },

  { id:'ak-b1-2', level:'B1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'tf', q:'I Norge forventes det at ansatte tar egne initiativ og er selvstendige.',
    ans:true,
    exp:'Riktig! Norsk lederstil er delegerende – ansatte forventes å ta ansvar uten detaljstyring.' },

  { id:'ak-b1-3', level:'B1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva menes med «Janteloven»?',
    opts:['En norsk arbeidslov om likebehandling','En uformell norm om ikke å tro at du er bedre enn andre','En skattelov om fordeling av goder'], ans:1,
    exp:'Janteloven er en kulturell norm som vektlegger fellesskap og likhet framfor individuell skryt.' },

  { id:'ak-b1-4', level:'B1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva innebærer «tillit» i norsk arbeidsliv?',
    opts:['En type bindende arbeidsavtale','En regel om overtid og kompensasjon','Ansatte har stor frihet fordi de forventes å levere resultater'], ans:2,
    exp:'Tillit er grunnleggende i norsk arbeidsliv – frihet under ansvar er et sentralt prinsipp.' },

  { id:'ak-b1-5', level:'B1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva betyr «inkluderende arbeidsliv» (IA)?',
    opts:['Å inkludere alle uavhengig av bakgrunn, helse og alder','En lov som regulerer internasjonal ansettelse','Et inkluderingsprogram for barn i barnehagen'], ans:0,
    exp:'IA-arbeidet handler om å redusere sykefravær og inkludere alle i arbeidslivet.' },

  { id:'ak-b1-6', level:'B1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'fill', q:'«___ dumping» betyr at utenlandske arbeidstakere har vilkår som er dårligere enn norske lønnsvilkår.',
    opts:['Lønns','Sosial','Digital'], ans:1,
    exp:'Sosial dumping er et alvorlig problem som undergraver norske lønns- og arbeidsvilkår.' },

  // B2
  { id:'ak-b2-1', level:'B2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva kjennetegner norsk lederskap?',
    opts:['Sterk hierarkisk kontroll og detaljstyring','Transaksjonsorientert ledelse med kortsiktig fokus','Delegerende og tillitsbasert lederstil med fokus på medarbeiderne'], ans:2,
    exp:'Norsk ledelse er kjent for å være tillitsbasert, lite autoritær og fokusert på teamet.' },

  { id:'ak-b2-2', level:'B2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'tf', q:'Norge scorer ofte høyt på tillit og lavt på korrupsjon internasjonalt.',
    ans:true,
    exp:'Riktig! Norge er blant verdens minst korrupte land (Transparency International) og scorer høyt på tillit.' },

  { id:'ak-b2-3', level:'B2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva menes med «psykologisk trygghet» på arbeidsplassen?',
    opts:['Et miljø der ansatte tør si sin mening uten frykt for represalier','En ordning om tilgang til psykologhjelp på jobb','En forsikring eller vern mot mobbing og trakassering'], ans:0,
    exp:'Psykologisk trygghet øker innovasjon, læring og trivsel (Amy Edmondson).' },

  { id:'ak-b2-4', level:'B2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva menes med «arbeidslinja» i norsk politikk?',
    opts:['En regel om drift og vedlikehold av jernbanen','En politikk om at flest mulig skal jobbe framfor å leve av stønad','En ordning for permitteringer ved lavkonjunktur'], ans:1,
    exp:'Arbeidslinja er et kjernebegrep i norsk velferdspolitikk siden 1990-tallet.' },

  { id:'ak-b2-5', level:'B2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva menes med «tillitsreformen» i offentlig sektor?',
    opts:['En reform som øker kontroll og rapportering','En pensjonsreform for offentlig sektor','En reform som gir offentlig ansatte mer tillit og autonomi'], ans:2,
    exp:'Tillitsreformen (fra 2021) skal redusere detaljstyring og gi mer faglig frihet i offentlig sektor.' },

  { id:'ak-b2-6', level:'B2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva betyr «mangfold og inkludering» på norske arbeidsplasser?',
    opts:['Bevisst arbeid for å sikre likeverd og representasjon','En type opplæringsplan for nyansatte','En lov om ansettelse av fremmedspråklige arbeidstakere'], ans:0,
    exp:'M&I-arbeid handler om å verdsette ulikheter og sikre at alle har like muligheter.' },

  /* ===================== CV OG NAV ===================== */
  // A1
  { id:'cn-a1-1', level:'A1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er en CV?',
    opts:['Et brev du sender til sjefen','En oversikt over din utdanning og arbeidserfaring','En søknad om penger fra NAV'], ans:1,
    exp:'CV (Curriculum Vitae) viser din utdanning og arbeidserfaring.' },

  { id:'cn-a1-2', level:'A1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er NAV?',
    opts:['Et sykehus for voksne og barn','En skole for eldre mennesker','Et offentlig kontor som hjelper deg med jobb og stønad'], ans:2,
    exp:'NAV (Arbeids- og velferdsetaten) hjelper folk med jobb, sykepenger, dagpenger og mer.' },

  { id:'cn-a1-3', level:'A1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'tf', q:'Det er vanlig å levere en CV når du søker jobb.',
    ans:true,
    exp:'Riktig! CV er et viktig dokument når du søker jobb.' },

  { id:'cn-a1-4', level:'A1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er dagpenger?',
    opts:['Penger fra NAV mens du søker ny jobb','Penger du tjener på en vanlig arbeidsdag','Penger fra banken som et lån'], ans:0,
    exp:'Dagpenger er stønad fra NAV mens du er arbeidsledig og søker ny jobb.' },

  { id:'cn-a1-5', level:'A1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'tf', q:'Kan NAV hjelpe deg med å finne jobb?',
    ans:true,
    exp:'Riktig! NAV tilbyr jobbveiledning, arbeidsmarkedstiltak og hjelp til å skrive CV.' },

  { id:'cn-a1-6', level:'A1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'fill', q:'Du finner ledige stillinger på ___.no.',
    opts:['politiet','nav','skatteetaten'], ans:1,
    exp:'nav.no har mange ledige stillinger. Du kan også søke på finn.no.' },

  // A2
  { id:'cn-a2-1', level:'A2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er tiltakspenger?',
    opts:['Penger til mat og daglige utgifter','Lønn du får direkte fra arbeidsgiver','Støtte fra NAV mens du er i arbeidsmarkedstiltak'], ans:2,
    exp:'Tiltakspenger er stønad fra NAV mens du deltar på kurs, praksis eller andre tiltak.' },

  { id:'cn-a2-2', level:'A2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er en referanse på en CV?',
    opts:['En person som kan bekrefte din erfaring','En bok du har lest og kan anbefale','En lenke til din LinkedIn-profil'], ans:0,
    exp:'En referanse er en person (f.eks. tidligere arbeidsgiver) som kan anbefale deg til ny jobb.' },

  { id:'cn-a2-3', level:'A2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'tf', q:'En CV bør helst ikke være lengre enn 1–2 sider.',
    ans:true,
    exp:'Riktig! En kort og oversiktlig CV er best. Arbeidsgiver har ikke tid til å lese mange sider.' },

  { id:'cn-a2-4', level:'A2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er "en jobbsøknad"?',
    opts:['Et brev du sender til familien','Et brev der du forklarer hvorfor du søker jobben','En medisinsk attest fra fastlegen'], ans:1,
    exp:'I søknadsbrevet presenterer du deg selv og forklarer hvorfor du er rett person for jobben.' },

  { id:'cn-a2-5', level:'A2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er en NAV-veileder?',
    opts:['En lege som er ansatt hos NAV','En lærer som underviser på NAV-kurs','En person på NAV som hjelper deg med jobb og stønad'], ans:2,
    exp:'NAV-veilederen din er din kontaktperson og hjelper deg med aktivitetsplan og søknader.' },

  { id:'cn-a2-6', level:'A2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'fill', q:'Jeg tilpasser søknaden min til hver ___ jeg søker.',
    opts:['stilling','CV','skole'], ans:0,
    exp:'Det er viktig å tilpasse søknaden til den konkrete stillingen du søker på.' },

  // B1
  { id:'cn-b1-1', level:'B1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er en «aktivitetsplan» hos NAV?',
    opts:['En treningsplan tilpasset din helseplan','En plan for hva du skal gjøre for å komme i jobb','En ferieplan for alle de ansatte'], ans:1,
    exp:'Aktivitetsplanen er en felles plan mellom deg og NAV med konkrete steg mot arbeid.' },

  { id:'cn-b1-2', level:'B1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er et «meldekort» hos NAV?',
    opts:['Et julekort du sender NAV om jobbsituasjonen din','Et skjema for å melde ny adresse til NAV','Et skjema du sender NAV annenhver uke som aktiv arbeidssøker'], ans:2,
    exp:'Meldekort sendes digitalt på nav.no. Glemmer du det, mister du ytelsen for perioden.' },

  { id:'cn-b1-3', level:'B1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'tf', q:'NAV finansierer kurs og opplæring for arbeidssøkere.',
    ans:true,
    exp:'Riktig! NAV kan gi tilskudd til kurs, fagbrev og annen opplæring som øker jobbsjansene.' },

  { id:'cn-b1-4', level:'B1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er gode egenskaper å nevne i en jobbsøknad?',
    opts:['Samarbeidsevne, fleksibilitet og initiativ','Treningsvaner og matpreferanser','Politiske meninger og partimedlemskap'], ans:0,
    exp:'Arbeidsgivere setter pris på samarbeidsevne, ansvarsfølelse, fleksibilitet og selvstendighet.' },

  { id:'cn-b1-5', level:'B1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva menes med et «hull i en CV»?',
    opts:['Feil stavemåte eller grammatikk i CV-en','Perioder uten jobb eller utdanning du bør forklare','Perioder der du kun jobbet deltid'], ans:1,
    exp:'Hull er perioder uten registrert aktivitet. Forklar dem kort og positivt (f.eks. omsorg, reise, kurs).' },

  { id:'cn-b1-6', level:'B1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'fill', q:'Etter å ha sendt søknaden bør du følge opp med en ___ henvendelse etter 1–2 uker.',
    opts:['kritisk','uformell','høflig'], ans:2,
    exp:'En høflig oppfølging viser initiativ og interesse for stillingen.' },

  // B2
  { id:'cn-b2-1', level:'B2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er «ATS» (Applicant Tracking System)?',
    opts:['Programvare som automatisk sorterer søknader på nøkkelord','En type digital arbeidsavtale','Et prøvesystem for jobbsøkere hos NAV'], ans:0,
    exp:'ATS brukes av mange store bedrifter. Bruk nøkkelord fra stillingsannonsen i CV og søknad.' },

  { id:'cn-b2-2', level:'B2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva slags program er «kvalifiseringsprogrammet» (KVP)?',
    opts:['Et norskkurs for innvandrere uten fast jobb','Et program for de med svak arbeidstilknytning med tett NAV-oppfølging','Et program for ungdom som dropper ut av videregående'], ans:1,
    exp:'Kvalifiseringsprogrammet er for de med størst utfordringer og gir tett individuell oppfølging.' },

  { id:'cn-b2-3', level:'B2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'tf', q:'Nøkkelord fra stillingsannonsen bør brukes i søknaden for å passere ATS-systemer.',
    ans:true,
    exp:'Riktig! ATS-systemer matcher nøkkelord i søknaden mot kravene i stillingsannonsen.' },

  { id:'cn-b2-4', level:'B2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er en «pitch» i jobbsammenheng?',
    opts:['En heisteknikk brukt av intervjuere','Et brev sendt direkte til HR-avdelingen','En kort og overbevisende selvpresentasjon på 30–60 sekunder'], ans:2,
    exp:'En pitch brukes i nettverk og intervjuer – øv på å presentere deg selv kompakt og tydelig.' },

  { id:'cn-b2-5', level:'B2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er forskjellen på kronologisk og funksjonell CV?',
    opts:['Kronologisk lister erfaring tidsmessig, funksjonell etter kompetanse','Kronologisk er alltid den lengste CV-typen','Funksjonell CV brukes kun av ledere'], ans:0,
    exp:'Velg kronologisk ved sterk erfaring. Funksjonell passer ved hull eller karriereskifte.' },

  { id:'cn-b2-6', level:'B2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva bør du undersøke om bedriften før et jobbintervju?',
    opts:['Intervjuerens private og faglige bakgrunn','Bedriftens visjon, verdier og aktuelle nyheter','Konkurrentenes lønnsvilkår og ansettelsesvilkår'], ans:1,
    exp:'Godt forarbeid viser initiativ og interesse. Les bedriftens nettside og årsrapport.' },

];

/* ---- POINT VALUES PER LEVEL ---- */
const POINTS = { A1: 10, A2: 15, B1: 20, B2: 25 };
const TIMER_DURATION = { A1: 45, A2: 38, B1: 30, B2: 25 };
const QUESTIONS_PER_GAME = 15;

/* ---- GAME STATE ---- */
let state = {
  level: null,
  pool: [],
  queue: [],
  idx: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  correct: 0,
  history: [],   // {q, userAns, wasCorrect}
  timerInterval: null,
  timerLeft: 30,
  answered: false,
};

/* ---- UTILITY ---- */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function $(id) { return document.getElementById(id); }

function announce(msg) {
  const el = $('sr-live');
  el.textContent = '';
  setTimeout(() => { el.textContent = msg; }, 50);
}

/* ---- SCREEN NAVIGATION ---- */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  $(id).focus && $(id).focus();
}

/* ---- START GAME ---- */
function startGame(level) {
  state.level = level;
  state.pool = QUESTIONS.filter(q => q.level === level);
  state.queue = shuffle(state.pool).slice(0, QUESTIONS_PER_GAME);
  state.idx = 0;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.correct = 0;
  state.history = [];
  showScreen('screen-game');
  loadQuestion();
}

/* ---- LOAD QUESTION ---- */
function loadQuestion() {
  const q = state.queue[state.idx];
  state.answered = false;

  // Header
  $('q-counter').textContent = `Spørsmål ${state.idx + 1} / ${QUESTIONS_PER_GAME}`;
  $('score-num').textContent = state.score;
  $('streak-num').textContent = state.streak;
  const pct = (state.idx / QUESTIONS_PER_GAME) * 100;
  $('prog-fill').style.width = pct + '%';
  $('prog-bar').setAttribute('aria-valuenow', state.idx);

  // Category badge
  $('cat-badge').style.background = q.catColor;
  $('cat-icon').textContent = q.catIcon;
  $('cat-name').textContent = q.catName;

  // Question type label
  const typeLabels = { mc: 'Flervalg', tf: 'Sant eller Usant?', fill: 'Fyll inn' };
  $('q-type-label').textContent = typeLabels[q.type] || 'Spørsmål';

  // Question text
  if (q.type === 'fill') {
    $('q-text').innerHTML = q.q.replace('___', '<span class="blank" aria-label="blank">___</span>');
  } else {
    $('q-text').textContent = q.q;
  }

  // Build options
  const list = $('options-list');
  list.innerHTML = '';
  const opts = q.type === 'tf' ? ['Sant', 'Usant'] : q.opts;
  const letters = ['A','B','C','D'];

  opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.setAttribute('aria-label', `Alternativ ${letters[i]}: ${opt}`);
    btn.innerHTML = `
      <span class="opt-letter" aria-hidden="true">${letters[i]}</span>
      <span>${opt}</span>
      <span class="opt-indicator" aria-hidden="true"></span>`;
    btn.onclick = () => handleAnswer(i, btn);
    list.appendChild(btn);
  });

  // Hide feedback
  const fb = $('feedback');
  fb.className = 'feedback';
  fb.style.display = 'none';

  // Start timer
  startTimer();

  announce(`Spørsmål ${state.idx + 1} av ${QUESTIONS_PER_GAME}. ${opts.length} alternativer.`);
}

/* ---- TIMER ---- */
function startTimer() {
  clearInterval(state.timerInterval);
  const total = TIMER_DURATION[state.level] || 30;
  state.timerLeft = total;
  updateTimerBar(total, total);

  state.timerInterval = setInterval(() => {
    state.timerLeft--;
    updateTimerBar(state.timerLeft, total);
    if (state.timerLeft <= 0) {
      clearInterval(state.timerInterval);
      if (!state.answered) timeOut();
    }
  }, 1000);
}

function updateTimerBar(left, total) {
  const pct = (left / total) * 100;
  const fill = $('timer-fill');
  fill.style.width = pct + '%';
  fill.classList.remove('warn', 'danger');
  if (pct < 30) fill.classList.add('danger');
  else if (pct < 55) fill.classList.add('warn');
}

function timeOut() {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);
  const q = state.queue[state.idx];

  // Disable buttons
  document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);

  // Mark correct answer
  const opts = q.type === 'tf' ? ['Sant','Usant'] : q.opts;
  const correctIdx = q.type === 'tf' ? (q.ans === true ? 0 : 1) : q.ans;
  const btns = document.querySelectorAll('.opt-btn');
  btns[correctIdx].classList.add('correct');
  btns[correctIdx].querySelector('.opt-indicator').textContent = '✓';

  state.streak = 0;
  $('streak-num').textContent = 0;
  state.history.push({ q, userAns: -1, wasCorrect: false });

  showFeedback(false, q.exp, q.type === 'tf' ? (q.ans ? 'Sant' : 'Usant') : opts[correctIdx]);
  announce('Tiden er ute! ' + q.exp);
}

/* ---- HANDLE ANSWER ---- */
function handleAnswer(idx, btn) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);

  const q = state.queue[state.idx];
  const opts = q.type === 'tf' ? ['Sant','Usant'] : q.opts;
  const correctIdx = q.type === 'tf' ? (q.ans === true ? 0 : 1) : q.ans;
  const isCorrect = idx === correctIdx;

  // Disable all buttons
  document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);

  // Style selected and correct
  const btns = document.querySelectorAll('.opt-btn');
  if (isCorrect) {
    btn.classList.add('correct');
    btn.querySelector('.opt-indicator').textContent = '✓';
  } else {
    btn.classList.add('incorrect');
    btn.querySelector('.opt-indicator').textContent = '✗';
    btns[correctIdx].classList.add('correct');
    btns[correctIdx].querySelector('.opt-indicator').textContent = '✓';
  }

  // Update score / streak
  if (isCorrect) {
    state.streak++;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    state.correct++;
    const pts = POINTS[state.level] + (state.streak > 1 ? Math.min((state.streak - 1) * 5, 25) : 0);
    state.score += pts;
    $('score-num').textContent = state.score;
    $('streak-num').textContent = state.streak;
    showScorePop(pts, btn);
    announce(`Riktig! +${pts} poeng. Rekke: ${state.streak}.`);
  } else {
    state.streak = 0;
    $('streak-num').textContent = 0;
    announce(`Feil. Riktig svar er: ${opts[correctIdx]}.`);
  }

  state.history.push({ q, userAns: idx, wasCorrect: isCorrect });
  showFeedback(isCorrect, q.exp, opts[correctIdx]);
}

/* ---- FEEDBACK ---- */
function showFeedback(isCorrect, explanation, correctAns) {
  const fb = $('feedback');
  fb.style.display = 'block';
  fb.className = 'feedback show ' + (isCorrect ? 'correct' : 'incorrect');

  $('fb-title').innerHTML = isCorrect
    ? '✅ Riktig!'
    : `❌ Feil – riktig svar er: <em>${correctAns}</em>`;

  $('fb-text').textContent = explanation;

  const nextBtn = $('next-btn');
  nextBtn.textContent = state.idx + 1 >= QUESTIONS_PER_GAME ? 'Se resultater 🏆' : 'Neste spørsmål →';
}

/* ---- NEXT QUESTION ---- */
function nextQuestion() {
  state.idx++;
  if (state.idx >= QUESTIONS_PER_GAME) {
    endGame();
  } else {
    loadQuestion();
  }
}

/* ---- SCORE POP ---- */
function showScorePop(pts, refEl) {
  const pop = document.createElement('div');
  pop.className = 'score-pop';
  pop.textContent = `+${pts}`;
  const rect = refEl.getBoundingClientRect();
  pop.style.left = rect.left + rect.width / 2 + 'px';
  pop.style.top = rect.top + window.scrollY + 'px';
  document.body.appendChild(pop);
  setTimeout(() => pop.remove(), 800);
}

/* ---- END GAME ---- */
function endGame() {
  clearInterval(state.timerInterval);
  const pct = state.correct / QUESTIONS_PER_GAME;

  // Stars
  let stars, emoji, title, sub;
  if (pct >= 0.9) {
    stars = '⭐⭐⭐'; emoji = '🏆'; title = 'Utmerket!';
    sub = `Du svarte riktig på ${state.correct} av ${QUESTIONS_PER_GAME} spørsmål!`;
    triggerConfetti();
  } else if (pct >= 0.7) {
    stars = '⭐⭐'; emoji = '😊'; title = 'Bra jobbet!';
    sub = `Du svarte riktig på ${state.correct} av ${QUESTIONS_PER_GAME} spørsmål!`;
  } else if (pct >= 0.5) {
    stars = '⭐'; emoji = '💪'; title = 'Fortsett å øve!';
    sub = `Du svarte riktig på ${state.correct} av ${QUESTIONS_PER_GAME} spørsmål.`;
  } else {
    stars = ''; emoji = '📚'; title = 'Øv mer!';
    sub = `Du svarte riktig på ${state.correct} av ${QUESTIONS_PER_GAME}. Ikke gi opp!`;
  }

  $('res-emoji').textContent = emoji;
  $('res-title').textContent = title;
  $('res-sub').textContent = sub;
  $('stars-row').textContent = stars;
  $('stars-row').setAttribute('aria-label', stars ? stars.length / 2 + ' stjerner' : '0 stjerner');

  $('s-score').textContent = state.score;
  $('s-correct').textContent = `${state.correct}/${QUESTIONS_PER_GAME}`;
  $('s-streak').textContent = state.maxStreak;

  // Badges
  buildBadges(pct);

  // Tally
  buildTally();

  showScreen('screen-results');
  announce(`${title} Du fikk ${state.score} poeng og ${state.correct} av ${QUESTIONS_PER_GAME} riktige.`);
}

/* ---- BADGES ---- */
function buildBadges(pct) {
  const badges = [
    { id: 'perfect',  label: '🎯 Perfekt!',      earned: pct === 1 },
    { id: 'gold',     label: '🥇 Gullsvar',       earned: pct >= 0.9 },
    { id: 'streak5',  label: '🔥 5 på rad!',      earned: state.maxStreak >= 5 },
    { id: 'streak10', label: '💥 10 på rad!',     earned: state.maxStreak >= 10 },
    { id: 'b2',       label: '🎓 B2-ekspert',     earned: state.level === 'B2' && pct >= 0.7 },
    { id: 'b1',       label: '📖 B1-selvstendig', earned: state.level === 'B1' && pct >= 0.7 },
    { id: 'half',     label: '💡 Godt forsøk',    earned: pct >= 0.5 },
  ];

  const earned = badges.filter(b => b.earned);
  const container = $('badges-row');
  container.innerHTML = '';

  if (earned.length === 0) {
    const chip = document.createElement('div');
    chip.className = 'badge-chip locked';
    chip.textContent = '🔒 Prøv igjen for å låse opp merker!';
    chip.setAttribute('role','listitem');
    container.appendChild(chip);
    return;
  }

  earned.forEach(b => {
    const chip = document.createElement('div');
    chip.className = 'badge-chip earned pop-in';
    chip.textContent = b.label;
    chip.setAttribute('role','listitem');
    container.appendChild(chip);
  });
}

/* ---- TALLY ---- */
function buildTally() {
  const container = $('tally-list');
  container.innerHTML = '';
  state.history.forEach((h, i) => {
    const q = h.q;
    const opts = q.type === 'tf' ? ['Sant','Usant'] : q.opts;
    const correctOpt = q.type === 'tf' ? (q.ans ? 'Sant' : 'Usant') : opts[q.ans];
    const row = document.createElement('div');
    row.className = 'tally-row';
    row.setAttribute('role','listitem');
    row.innerHTML = `
      <span class="tally-icon" aria-hidden="true">${h.wasCorrect ? '✅' : '❌'}</span>
      <span class="tally-q">
        <strong>S${i+1}:</strong> ${q.q.replace('___','___')}
        ${!h.wasCorrect ? `<br><em>Riktig: ${correctOpt}</em>` : ''}
      </span>
      <span class="tally-result ${h.wasCorrect ? 'ok' : 'ko'}" aria-label="${h.wasCorrect ? 'Riktig' : 'Feil'}">
        ${h.wasCorrect ? '+' + POINTS[state.level] : '0'}
      </span>`;
    container.appendChild(row);
  });
}

/* ---- RESTART ---- */
function restartGame() {
  startGame(state.level);
}

/* ---- QUIT MODAL ---- */
function openQuitModal() {
  // Pause the timer while modal is open
  clearInterval(state.timerInterval);

  // Fill in current progress
  $('modal-qnum').textContent = state.idx + 1;
  $('modal-score').textContent = state.score;
  $('modal-correct').textContent = state.correct;

  const overlay = $('quit-overlay');
  overlay.classList.add('open');

  // Focus the cancel button (safest default – continue playing)
  setTimeout(() => $('modal-cancel-btn').focus(), 50);

  // Close on backdrop click
  overlay.addEventListener('click', _handleOverlayClick);

  // Close on Escape key
  document.addEventListener('keydown', _handleEscKey);
}

function closeQuitModal() {
  const overlay = $('quit-overlay');
  overlay.classList.remove('open');
  overlay.removeEventListener('click', _handleOverlayClick);
  document.removeEventListener('keydown', _handleEscKey);

  // Resume timer if question is not yet answered
  if (!state.answered) {
    startTimer();
    // Restore the remaining time visually
    const total = TIMER_DURATION[state.level] || 30;
    updateTimerBar(state.timerLeft, total);
  }
}

function _handleOverlayClick(e) {
  if (e.target === $('quit-overlay')) closeQuitModal();
}

function _handleEscKey(e) {
  if (e.key === 'Escape') closeQuitModal();
}

function quitToMenu() {
  clearInterval(state.timerInterval);
  $('quit-overlay').classList.remove('open');
  document.removeEventListener('keydown', _handleEscKey);
  showScreen('screen-welcome');
}

function quitAndRestart() {
  $('quit-overlay').classList.remove('open');
  document.removeEventListener('keydown', _handleEscKey);
  startGame(state.level);
}

/* ---- CONFETTI ---- */
function triggerConfetti() {
  const canvas = $('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 8 + 4,
    d: Math.random() * 120 + 10,
    color: ['#F6AE2D','#1F4E79','#4CAF50','#E53935','#9C27B0','#FF9800'][Math.floor(Math.random()*6)],
    tilt: Math.floor(Math.random() * 10) - 10,
    tiltAngle: 0,
    tiltAngleInc: (Math.random() * 0.1) + 0.05,
  }));

  let angle = 0;
  let frame;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angle += 0.01;
    particles.forEach(p => {
      p.tiltAngle += p.tiltAngleInc;
      p.y += (Math.cos(angle + p.d) + 2 + p.r / 2) * 0.9;
      p.tilt = Math.sin(p.tiltAngle) * 12;
      ctx.beginPath();
      ctx.lineWidth = p.r / 2;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
      ctx.stroke();
    });
    if (particles.some(p => p.y < canvas.height + 20)) {
      frame = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  draw();
  setTimeout(() => { cancelAnimationFrame(frame); ctx.clearRect(0, 0, canvas.width, canvas.height); }, 4500);
}
