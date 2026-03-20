/* ============================================================
   ARBEIDSLIVSSPILLET – Molde voksenopplæringssenter
   ============================================================ */

/* ---- QUESTION BANK ---- */
const QUESTIONS = [

  /* ===================== YRKER ===================== */
  // A1
  { id:'y-a1-1', level:'A1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hvem hjelper syke mennesker på sykehuset?',
    opts:['Renholdere','Sykepleiere','Bussjåfører'], ans:1,
    exp:'En sykepleier jobber på sykehus og hjelper syke pasienter.' },

  { id:'y-a1-2', level:'A1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hvem lager maten på en restaurant?',
    opts:['en kokk','en lærere,'en elektriker'], ans:0,
    exp:'En kokk lager mat på restaurant eller i kantine.' },

  { id:'y-a1-3', level:'A1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'tf', q:'En bussjåfør kjører lastebil.',
    ans:false,
    exp:'En bussjåfør kjører buss. En lastebilsjåfør kjører lastebil.' },

  { id:'y-a1-4', level:'A1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva gjør en renholder?',
    opts:['Kjører buss','Vasker og rydder','Selger varer'], ans:1,
    exp:'En renholder vasker og holder arbeidsplassen ren.' },

  { id:'y-a1-5', level:'A1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hvem har det pedagogiske ansvaret i en barnehage?',
    opts:['en barnehagelærer','en lege','en elektriker'], ans:0,
    exp:'En barnehagelærer jobber i barnehagen og passer på barn.' },

  { id:'y-a1-6', level:'A1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'fill', q:'Jeg jobber som ___ på sykehuset.',
    opts:['sykepleier','bussjåfør','kokk'], ans:0,
    exp:'En sykepleier jobber på sykehus.' },

  // A2
  { id:'y-a2-1', level:'A2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er en «ledig stilling»?',
    opts:['En plass å sitte','En jobb du kan søke på','En lønnsslipp'], ans:1,
    exp:'En stilling er en jobb du kan søke på hos en arbeidsgiver.' },

  { id:'y-a2-2', level:'A2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er et vikariat?',
    opts:['En fast jobb','En midlertidig jobb','En deltidsjobb'], ans:1,
    exp:'Et vikariat er en midlertidig jobb, ofte for en person som er syk eller i permisjon.' },

  { id:'y-a2-3', level:'A2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'tf', q:'For å jobbe som elektriker trenger du fagbrev.',
    ans:true,
    exp:'Riktig! Elektriker er en beskyttet tittel som krever fagbrev.' },

  { id:'y-a2-4', level:'A2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva betyr «heltid»?',
    opts:['Du jobber halvparten av en arbeidsuke','Du jobber full arbeidsuke (37,5 timer)','Du jobber hjemme'], ans:1,
    exp:'Heltid betyr full arbeidsuke, som i Norge er 37,5/40 timer.' },

  { id:'y-a2-5', level:'A2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'fill', q:'Jeg jobber ___ – det vil si kun noen timer per uke.',
    opts:['deltid','heltid','overtid'], ans:0,
    exp:'Deltid betyr at du jobber færre timer enn full stilling.' },

  { id:'y-a2-6', level:'A2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hvilke yrker er vanlige i helsesektoren?',
    opts:['Sykepleier og hjelpepleier','Bussjåfør og snekker','Kokk og renholder'], ans:0,
    exp:'Sykepleiere og hjelpepleiere er vanlige yrker i helsesektoren.' },

  // B1
  { id:'y-b1-1', level:'B1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er et «fagbrev»?',
    opts:['Et brev til kollegaen din','Bevis på fullført yrkesfaglig opplæring','En jobbsøknad'], ans:1,
    exp:'Et fagbrev er et offentlig godkjent bevis på at du har fullført en yrkesfaglig utdanning.' },

  { id:'y-b1-2', level:'B1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'tf', q:'I Norge er det vanlig at sjefen har eget kontor atskilt fra de ansatte.',
    ans:false,
    exp:'Norge har flate strukturer. Sjefer og ansatte sitter ofte i åpent landskap og jobber side om side.' },

  { id:'y-b1-3', level:'B1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er forskjellen mellom heltid og deltid?',
    opts:['Heltid = full arbeidsuke (37,5t / 40t), deltid = færre timer','Heltid = jobber hjemme, deltid = kontor','Ingen forskjell'], ans:0,
    exp:'Heltid er full stilling (37,5 / 40 t/uke). Deltid er en lavere stillingsprosent.' },

  { id:'y-b1-4', level:'B1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er en «HMS-koordinator»?',
    opts:['Person som koordinerer helse, miljø og sikkerhet','Leder for kantinen','Økonomiansvarlig'], ans:0,
    exp:'En HMS-koordinator har ansvar for å koordinere HMS-arbeidet på arbeidsplassen.' },

  { id:'y-b1-5', level:'B1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er de mest etterspurte yrkene i Norge nå?',
    opts:['Helse, oppvekst og omsorg','Matproduksjon og bilindustri','Film og musikk'], ans:0,
    exp:'Det er stor etterspørsel etter folk i helse, oppvekst og omsorg.' },

  { id:'y-b1-6', level:'B1', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'fill', q:'En ___ er en midlertidig jobb der du erstatter en som er syk.',
    opts:['vikar','fastansatt','lærling'], ans:0,
    exp:'En vikar jobber midlertidig og erstatter en annen ansatt.' },

  // B2
  { id:'y-b2-1', level:'B2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva innebærer «autorisasjon» i helsesektoren?',
    opts:['En offentlig tillatelse til å utøve yrket, gitt av myndighetene','En avtale med arbeidsgiver','Et fagbrev fra videregående'], ans:0,
    exp:'Helsepersonell må søke Helsedirektoratet om autorisasjon for å ha rett til å bruke sin yrkestittel.' },

  { id:'y-b2-2', level:'B2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva betyr «stillingsprosent 80 %»?',
    opts:['Du jobber 80 % av full stilling, dvs. ca. 30 timer per uke','Du tjener 80 % av minstelønnen','Du er ferdig med 80 % av arbeidsdagen'], ans:0,
    exp:'80 % stilling betyr 80 % av normalarbeidstiden (37,5 t), som er ca. 30 timer per uke.' },

  { id:'y-b2-3', level:'B2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er «en prøvetid»?',
    opts:['En periode på inntil 6 måneder ved ny jobb med enklere oppsigelsesregler','En ferie ved nye jobber','En opplæringsperiode betalt av NAV'], ans:0,
    exp:'Prøvetid er maks 6 måneder. I denne perioden kan begge parter si opp med kortere frist.' },

  { id:'y-b2-4', level:'B2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva er en «tariffavtale»?',
    opts:['En avtale mellom fagforening og arbeidsgiver om lønn og arbeidsvilkår','En avtale om reise og overnatting','En avtale om prisnivå i butikken'], ans:0,
    exp:'Tariffavtaler fastsetter minstelønn, arbeidstid og andre vilkår for en bransje eller bedrift.' },

  { id:'y-b2-5', level:'B2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'tf', q:'Arbeidsgiver kan avslutte et arbeidsforhold uten grunn i prøvetiden.',
    ans:false,
    exp:'Nei – oppsigelse i prøvetiden må fortsatt være saklig begrunnet, jf. Arbeidsmiljøloven § 15-6.' },

  { id:'y-b2-6', level:'B2', cat:'yrker', catName:'Yrker', catIcon:'👷', catColor:'#1F4E79',
    type:'mc', q:'Hva betyr «permisjon»?',
    opts:['Godkjent fri med rett til å komme tilbake til jobben','Oppsigelse fra jobben','En bonus for godt arbeid'], ans:0,
    exp:'Permisjon er godkjent fravær fra jobben. Du har rett til å komme tilbake til stillingen din etterpå.' },

  /* ===================== HMS ===================== */
  // A1
  { id:'h-a1-1', level:'A1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva bruker du for å beskytte hodet på jobb?',
    opts:['Hansker','Hjelm','Støvler'], ans:1,
    exp:'En hjelm beskytter hodet mot skader, for eksempel på byggeplassen.' },

  { id:'h-a1-2', level:'A1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva gjør du ved brann på arbeidsplassen?',
    opts:['Ringer sjefen','Ringer 110','Drikker vann'], ans:1,
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
    opts:['Hjelm','Hansker','Vernebriller'], ans:1,
    exp:'Hansker beskytter hendene mot kjemikalier, varme og skarpe gjenstander.' },

  // A2
  { id:'h-a2-1', level:'A2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva betyr forkortelsen HMS?',
    opts:['Helse, Miljø og Sikkerhet','Hjelm, Maske og Støvler','Helse, Mat og Skatt'], ans:0,
    exp:'HMS = Helse, Miljø og Sikkerhet. Alle norske virksomheter er pålagt å jobbe med HMS.' },

  { id:'h-a2-2', level:'A2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er en nødutgang?',
    opts:['En dør man aldri bruker','En dør som brukes ved nødsituasjoner som brann','Bakdøren til kjøkkenet'], ans:1,
    exp:'Nødutgangen er den nærmeste veien ut ved brann eller annen nødsituasjon.' },

  { id:'h-a2-3', level:'A2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva gjør du hvis du ser en farlig situasjon på jobb?',
    opts:['Ignorerer det','Sier fra til nærmeste leder','Forlater arbeidsplassen'], ans:1,
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
    opts:['Utstyr som beskytter kroppen på jobb','Utstyr for å lage mat','Utstyr for å rydde kontoret'], ans:0,
    exp:'Verneutstyr er alt utstyr som beskytter deg mot skader på jobb.' },

  // B1
  { id:'h-b1-1', level:'B1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er et «verneombud»?',
    opts:['En representant for de ansatte i HMS-saker','En vakt som beskytter bygningen','En lege på arbeidsplassen'], ans:0,
    exp:'Verneombudet velges av de ansatte og representerer dem i HMS-spørsmål.' },

  { id:'h-b1-2', level:'B1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er «psykososialt arbeidsmiljø»?',
    opts:['Den fysiske sikkerheten på jobb','Det sosiale og psykologiske miljøet på arbeidsplassen','Kantine og pauser'], ans:1,
    exp:'Psykososialt arbeidsmiljø handler om relasjoner, trivsel, mobbing og stress på jobb.' },

  { id:'h-b1-3', level:'B1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'tf', q:'Ansatte skal melde fra om arbeidsulykker til Arbeidstilsynet.',
    ans:true,
    exp:'Riktig! Alvorlige arbeidsulykker skal meldes til Arbeidstilsynet og politiet.' },

  { id:'h-b1-4', level:'B1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er Arbeidstilsynet?',
    opts:['En statlig etat som kontrollerer at arbeidsmiljøloven overholdes','En fagforening for tilsynsarbeidere','Et privat selskap som kontrollerer HMS'], ans:0,
    exp:'Arbeidstilsynet er et statlig tilsyn under Arbeids- og inkluderingsdepartementet.' },

  { id:'h-b1-5', level:'B1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er et «HMS-avvik»?',
    opts:['En hendelse som ikke er i tråd med HMS-krav og som skal meldes','En bonusordning for HMS-arbeid','En ny HMS-regel'], ans:0,
    exp:'Avvik skal registreres og følges opp for å forhindre nye hendelser.' },

  { id:'h-b1-6', level:'B1', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'fill', q:'Alle virksomheter i Norge er pålagt å ha et system for ___.',
    opts:['internkontroll','lønnsslipper','ferieavvikling'], ans:0,
    exp:'Internkontrollforskriften krever at alle virksomheter har systematisk HMS-arbeid.' },

  // B2
  { id:'h-b2-1', level:'B2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er Arbeidsmiljøloven (AML)?',
    opts:['Loven som regulerer rettigheter og plikter i norsk arbeidsliv','En lov om pensjonsrettigheter for personer over 67 år','En lov om skatteregler for alle som jobber i Norge'], ans:0,
    exp:'AML er den sentrale loven om arbeidsmiljø, stillingsvern og arbeidsforhold i Norge.' },

  { id:'h-b2-2', level:'B2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er «tilretteleggingsplikten»?',
    opts:['Arbeidsgivers plikt til å tilpasse arbeidet for ansatte med nedsatt arbeidsevne','Plikt til å tilrettelegge møterom når det er mer en 5 personer i et møte','Plikt til å tilby kantinemat for alle med fast jobb'], ans:0,
    exp:'Arbeidsgiver plikter å tilrettelegge arbeidsoppgaver og arbeidssted for ansatte med nedsatt funksjonsevne.' },

  { id:'h-b2-3', level:'B2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'tf', q:'Ansatte kan nekte å utføre arbeid de mener er direkte farlig for liv og helse.',
    ans:true,
    exp:'Riktig! AML § 2-3 gir ansatte rett til å avbryte arbeid ved alvorlig fare.' },

  { id:'h-b2-4', level:'B2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er en «IA-avtale» (Inkluderende Arbeidsliv)?',
    opts:['En avtale mellom virksomhet og NAV om å forebygge sykefravær','En avtale om internasjonal ansettelse','En avtale om IT-sikkerhet'], ans:0,
    exp:'IA-virksomheter forplikter seg til å jobbe aktivt med sykefraværsforebygging og inkludering.' },

  { id:'h-b2-5', level:'B2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva innebærer arbeidsgivers «internkontrollplikt»?',
    opts:['Systematisk arbeid for å sikre at HMS-krav overholdes, dokumentert i et system','Å kontrollere ansattes private aktiviteter','Å sende daglige rapporter til Arbeidstilsynet'], ans:0,
    exp:'Internkontrollforskriften pålegger arbeidsgiver å ha et dokumentert HMS-system.' },

  { id:'h-b2-6', level:'B2', cat:'hms', catName:'HMS', catIcon:'⚠️', catColor:'#B71C1C',
    type:'mc', q:'Hva er «SHA-plan» i byggeprosjekter?',
    opts:['En plan for Sikkerhet, Helse og Arbeidsmiljø i bygge- og anleggsprosjekter','En oversikt over alle ansattes helse','En plan for opplæring av nye ansatte'], ans:0,
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
    opts:['Et ID-kort','Et dokument som viser hvor mye skatt du skal betale','Et kredittkort'], ans:1,
    exp:'Skattekortet forteller arbeidsgiver hvor mye skatt som skal trekkes fra lønnen din.' },

  { id:'s-a1-5', level:'A1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'tf', q:'Du trenger ikke skattekort for å jobbe i Norge.',
    ans:false,
    exp:'Du må ha skattekort for å jobbe i Norge. Du henter det på skatteetaten.no.' },

  { id:'s-a1-6', level:'A1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva finner du på lønnsslippen?',
    opts:['Adressen din','Hvor mye du har tjent og betalt i skatt','Din CV'], ans:1,
    exp:'Lønnsslippen viser bruttoinntekt, skattetrekk og nettoinntekt (det du faktisk får utbetalt).' },

  // A2
  { id:'s-a2-1', level:'A2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva betyr «skattetrekk»?',
    opts:['Arbeidsgiver trekker skatt fra lønnen din automatisk','NAV betaler skatten for deg','Du betaler skatt én gang per år'], ans:0,
    exp:'Arbeidsgiver trekker skatten fra lønnen din før du mottar pengene. Dette kalles skattetrekk.' },

  { id:'s-a2-2', level:'A2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er feriepenger?',
    opts:['Ekstra lønn for å jobbe i ferien','Penger opptjent i arbeidsåret som utbetales i ferien','En bonus fra arbeidsgiver'], ans:1,
    exp:'Feriepenger er 10,2 % av lønnen du tjente forrige år. De utbetales vanligvis i juni.' },

  { id:'s-a2-3', level:'A2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'fill', q:'Jeg henter skattekortet mitt på ___ sine nettsider.',
    opts:['Skatteetaten','NAV','politiet'], ans:0,
    exp:'Gå til skatteetaten.no for å hente eller endre skattekortet ditt.' },

  { id:'s-a2-4', level:'A2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er skattemeldingen?',
    opts:['En melding om ny skatteregel','En årlig oversikt over inntekt og betalt skatt','En faktura fra Skatteetaten'], ans:1,
    exp:'Skattemeldingen (selvangivelsen) viser all inntekt og skatt for ett år. Du leverer den hvert vår.' },

  { id:'s-a2-5', level:'A2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'tf', q:'Alle som jobber i Norge må ha et norsk personnummer eller D-nummer.',
    ans:true,
    exp:'Riktig! Alle som jobber i Norge trenger personnummer eller D-nummer for å betale skatt.' },

  { id:'s-a2-6', level:'A2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva bruker staten skattepengene til?',
    opts:['Sykehus, skoler og veier','Lønn til politikere','Reklame i utlandet'], ans:0,
    exp:'Skattepenger finansierer velferdsstaten – sykehus, skoler, NAV, politiet og mye mer.' },

  // B1
  { id:'s-b1-1', level:'B1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva brukes skattekortet til?',
    opts:['Det forteller arbeidsgiver hvor mye skattetrekk som skal gjøres','Det brukes som ID på jobb','Det gir rett til trygdeytelser'], ans:0,
    exp:'Skattekortet inneholder din skatteprosent eller trekkprosent, som arbeidsgiver bruker.' },

  { id:'s-b1-2', level:'B1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er et D-nummer?',
    opts:['Et midlertidig personnummer for utenlandske statsborgere uten fast bosted i Norge','Et nummer på arbeidsavtalen','NAVs saksnummer for deg'], ans:0,
    exp:'D-nummeret brukes til skatt og andre registreringer for utenlandske arbeidstakere.' },

  { id:'s-b1-3', level:'B1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'tf', q:'Du kan endre skattekortet ditt midt i året hvis inntekten din endrer seg.',
    ans:true,
    exp:'Riktig! Endre skattekortet på skatteetaten.no hvis du bytter jobb eller får ny inntekt.' },

  { id:'s-b1-4', level:'B1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er «minstefradraget»?',
    opts:['Et standardfradrag som reduserer den skattemessige inntekten din','Den laveste mulige skatten','En ytelse fra NAV'], ans:0,
    exp:'Minstefradraget er et automatisk fradrag de fleste lønnstakere får, for å redusere skatten.' },

  { id:'s-b1-5', level:'B1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva skjer hvis du betaler for mye skatt i løpet av året?',
    opts:['Du får pengene tilbake ved skatteoppgjøret','Pengene doneres til veldedighet','De overføres til neste år'], ans:0,
    exp:'Ved skatteoppgjøret (sommeren) ser du om du har penger til gode eller restskatt.' },

  { id:'s-b1-6', level:'B1', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'fill', q:'Hvis du tjener mer enn du antas å tjene, bør du ___ skattekortet ditt.',
    opts:['endre','slette','ignorere'], ans:0,
    exp:'Endre skattekortet på skatteetaten.no for å unngå restskatt.' },

  // B2
  { id:'s-b2-1', level:'B2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva betyr «skattefradrag»?',
    opts:['Et beløp som trekkes fra den skattemessige inntekten og reduserer skatten','Et beløp trekket direkte fra lønnen','En straffegebyr fra Skatteetaten'], ans:0,
    exp:'Skattefradrag reduserer skattegrunnlaget ditt – for eksempel fradrag for fagforeningskontingent.' },

  { id:'s-b2-2', level:'B2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er «kildeskatt»?',
    opts:['En flat skatt på inntekt for utenlandske arbeidstakere i stedet for ordinær beskatning','Skatt på vann og naturressurser','En kommunal skatt'], ans:0,
    exp:'Kildeskatteordningen gir utenlandske arbeidstakere en forenklet beskatning på 25 %.' },

  { id:'s-b2-3', level:'B2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'tf', q:'Arbeidsgiver kan velge om de vil rapportere lønnsutbetalinger til Skatteetaten.',
    ans:false,
    exp:'Arbeidsgiver er lovpålagt å rapportere alle lønnsutbetalinger via a-meldingen hver måned.' },

  { id:'s-b2-4', level:'B2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er «a-melding»?',
    opts:['En månedlig rapport arbeidsgiver sender til Skatteetaten om ansattes lønn','En melding til Arbeidstilsynet om ny ansatt','Et trygdeskjema'], ans:0,
    exp:'A-meldingen sendes månedlig til Skatteetaten/NAV/SSB og inneholder lønns- og ansettelsesdata.' },

  { id:'s-b2-5', level:'B2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er «trinnskatt»?',
    opts:['En progressiv skatt der høyere inntekt beskattes med høyere prosent','En flat skatt på all inntekt','En lokal skatt i kommunen'], ans:0,
    exp:'Trinnskatten er progressiv: jo mer du tjener, jo høyere prosent betaler du på toppen.' },

  { id:'s-b2-6', level:'B2', cat:'skatt', catName:'Skatt', catIcon:'💰', catColor:'#E65100',
    type:'mc', q:'Hva er «PAYE-ordningen» (Pay As You Earn)?',
    opts:['En frivillig ordning for utenlandske arbeidstakere med flat skatt på 25 %','En ordning for selvstendig næringsdrivende','Et lønnssystem for offentlig sektor'], ans:0,
    exp:'PAYE gir utenlandske arbeidstakere forenklet skattlegging uten å levere skattemelding.' },

  /* ===================== EGENMELDING ===================== */
  // A1
  { id:'e-a1-1', level:'A1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva gjør du den første dagen du er syk og ikke kan jobbe?',
    opts:['Ingenting','Ringer arbeidsgiveren din','Drar til legen'], ans:1,
    exp:'Du skal alltid ringe eller sende melding til arbeidsgiver så tidlig som mulig.' },

  { id:'e-a1-2', level:'A1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er egenmelding?',
    opts:['Du skriver selv at du var syk','Legen skriver at du var syk','NAV skriver at du var syk'], ans:0,
    exp:'Egenmelding er når du selv melder fra om sykdom, uten legeerklæring.' },

  { id:'e-a1-3', level:'A1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'tf', q:'Du kan bruke egenmelding hvis du er syk én dag.',
    ans:true,
    exp:'Riktig! Egenmelding kan brukes ved korte sykdomsperioder.' },

  { id:'e-a1-4', level:'A1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er sykemelding?',
    opts:['Et dokument fra legen som sier du er syk','Et dokument du skriver selv','Et brev fra NAV'], ans:0,
    exp:'Sykemelding er en legeerklæring som bekrefter at du er for syk til å jobbe.' },

  { id:'e-a1-5', level:'A1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'tf', q:'Du trenger alltid legeerklæring etter én dags sykdom.',
    ans:false,
    exp:'Nei! Du kan bruke egenmelding de første dagene. Lege er bare nødvendig etter 3 dager.' },

  { id:'e-a1-6', level:'A1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'fill', q:'Når jeg er syk, ringer jeg til ___.',
    opts:['arbeidsgiveren min','legen','politiet'], ans:0,
    exp:'Du skal alltid ringe arbeidsgiveren din første dag du er syk.' },

  // A2
  { id:'e-a2-1', level:'A2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hvor mange dager kan du bruke egenmelding i strekk?',
    opts:['Opptil 3 dager','Opptil 14 dager','Ubegrenset'], ans:0,
    exp:'Du kan bruke egenmelding i inntil 3 dager av gangen.' },

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
    opts:['egenmelding','sykemelding','permisjon'], ans:0,
    exp:'Egenmelding brukes for korte sykdomsperioder uten behov for legeerklæring.' },

  { id:'e-a2-6', level:'A2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er sykepenger?',
    opts:['Penger du får fra NAV eller arbeidsgiver når du er syk','Bonus for å ikke bli syk','Penger til medisin'], ans:0,
    exp:'Sykepenger erstatter lønn når du er syk og ikke kan jobbe.' },

  // B1
  { id:'e-b1-1', level:'B1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er «arbeidsgiverperioden» ved sykdom?',
    opts:['De første 16 kalenderdagene der arbeidsgiver betaler sykepenger','En prøvetid for nye ansatte','Perioden NAV vurderer søknaden'], ans:0,
    exp:'I arbeidsgiverperioden (16 dager) betaler arbeidsgiver 100 % sykepenger.' },

  { id:'e-b1-2', level:'B1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'tf', q:'Misbruk av egenmelding kan føre til at arbeidsgiver krever legeerklæring fra dag 1.',
    ans:true,
    exp:'Riktig! Arbeidsgiver kan innskrenke retten til egenmelding ved misbruk.' },

  { id:'e-b1-3', level:'B1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er en «oppfølgingsplan»?',
    opts:['En plan laget av arbeidsgiver og syk ansatt for tilbakekomst til arbeid','En plan fra NAV om stønad','En karriereplan'], ans:0,
    exp:'Oppfølgingsplan lages senest innen 4 uker og viser hva som skal til for å komme tilbake.' },

  { id:'e-b1-4', level:'B1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva skjer etter 52 ukers sykemelding?',
    opts:['Sykepenger stanser og NAV vurderer arbeidsevnen din','Du mister jobben automatisk','Sykepengene dobles'], ans:0,
    exp:'Etter 52 uker stanser sykepengene. NAV vil avklare din arbeidsevne og fremtidige muligheter.' },

  { id:'e-b1-5', level:'B1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er «karensdager»?',
    opts:['Dager uten sykepenger – brukes i noen land, men ikke i Norge','Dager med ekstra sykepenger','Fridager etter sykemelding'], ans:0,
    exp:'I Norge har vi ingen karensdager – du får sykepenger fra første sykedag.' },

  { id:'e-b1-6', level:'B1', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'fill', q:'Arbeidsgiver og sykmeldt ansatt skal lage en ___ innen 4 uker.',
    opts:['oppfølgingsplan','arbeidsavtale','skattemelding'], ans:0,
    exp:'Oppfølgingsplanen dokumenterer hva som kan gjøres for å få den syke tilbake i arbeid.' },

  // B2
  { id:'e-b2-1', level:'B2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er «gradert sykemelding»?',
    opts:['En sykemelding der du jobber delvis og er delvis sykmeldt','En sykemelding med karakterer fra legen','En permanent uføremelding'], ans:0,
    exp:'Gradert sykmelding (f.eks. 50 %) betyr at du jobber halvparten og er sykmeldt for resten.' },

  { id:'e-b2-2', level:'B2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva innebærer «aktivitetsplikten» ved sykdom?',
    opts:['Sykmeldte plikter å forsøke arbeidsrelaterte aktiviteter med mindre medisinske grunner hindrer det','At du må trene daglig under sykmelding','At du må dokumentere alle aktiviteter for NAV'], ans:0,
    exp:'Aktivitetsplikten skal hjelpe sykmeldte tilbake i arbeid raskere.' },

  { id:'e-b2-3', level:'B2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'tf', q:'En arbeidstaker kan ikke sies opp utelukkende på grunn av sykdom.',
    ans:true,
    exp:'Riktig! AML § 15-8 gir sterkt vern mot oppsigelse de første 12 månedene med sykdom.' },

  { id:'e-b2-4', level:'B2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er «dialogmøte 1» i sykefraværsoppfølgingen?',
    opts:['Et møte innen 7 uker mellom sykmeldt og arbeidsgiver for å diskutere tilrettelegging','Det første møtet med NAV-veileder','Et møte med bedriftslegen'], ans:0,
    exp:'Dialogmøte 1 er pålagt innen 7 uker og skal gjennomgå oppfølgingsplanen.' },

  { id:'e-b2-5', level:'B2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er «AAP» (Arbeidsavklaringspenger)?',
    opts:['En ytelse fra NAV mens arbeidsevnen avklares etter sykdom eller skade','En ansettelsesavtale fra Arbeidsgiverforeningen','Et tilskudd til etter- og videreutdanning'], ans:0,
    exp:'AAP gis når du ikke lenger har rett på sykepenger og NAV avklarer hva du kan jobbe med.' },

  { id:'e-b2-6', level:'B2', cat:'egenmelding', catName:'Sykdom og fravær', catIcon:'🤒', catColor:'#1B5E20',
    type:'mc', q:'Hva er arbeidsgivers plikt ved 4 ukers sykdom?',
    opts:['Lage oppfølgingsplan i samarbeid med den sykmeldte','Umiddelbart varsle NAV om sykmeldt ansatt','Erstatte den sykmeldte med en ny ansatt'], ans:0,
    exp:'Innen 4 uker skal arbeidsgiver utarbeide oppfølgingsplan i samarbeid med arbeidstaker.' },

  /* ===================== RETTIGHETER OG PLIKTER ===================== */
  // A1
  { id:'r-a1-1', level:'A1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Har du rett til pauser på jobb?',
    opts:['Ja','Nei','Bare av og til'], ans:0,
    exp:'Alle ansatte har rett til pauser. Etter 5,5 timers arbeid har du rett til minst 30 minutter pause.' },

  { id:'r-a1-2', level:'A1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'tf', q:'Du har rett til ferie hvert år i Norge.',
    ans:true,
    exp:'Riktig! I Norge har alle ansatte rett til minst 4 uker og 1 dag ferie hvert år.' },

  { id:'r-a1-3', level:'A1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er din plikt som ansatt?',
    opts:['Møte opp på jobb til riktig tid','Kjøpe lunsj til sjefen','Vaske sjefen sin bil'], ans:0,
    exp:'Du plikter å møte opp til arbeid til avtalt tid og utføre jobben din.' },

  { id:'r-a1-4', level:'A1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva gjør du hvis du skal komme for sent til jobb?',
    opts:['Ingenting','Si fra til arbeidsgiver','Sende en melding til familien'], ans:1,
    exp:'Du plikter å varsle arbeidsgiver hvis du skal komme for sent.' },

  { id:'r-a1-5', level:'A1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'tf', q:'Du kan komme og gå fra jobb når du vil.',
    ans:false,
    exp:'Nei! Du har avtalt arbeidstid som du må overholde.' },

  { id:'r-a1-6', level:'A1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'fill', q:'Normal arbeidsuke i Norge er ___ timer.',
    opts:['37,5','40','45'], ans:0,
    exp:'Normal arbeidstid i Norge er 37,5 timer per uke for fulltidsansatte.' },

  // A2
  { id:'r-a2-1', level:'A2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er oppsigelsestid?',
    opts:['Perioden fra du sier opp til du slutter','Frist for å søke ny jobb','Tid du har på å svare på et jobbtilbud'], ans:0,
    exp:'Oppsigelsestid er perioden du fortsatt jobber etter at du eller arbeidsgiver har sagt opp.' },

  { id:'r-a2-2', level:'A2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'tf', q:'Arbeidstaker har alltid rett til skriftlig arbeidsavtale.',
    ans:true,
    exp:'Riktig! Arbeidsgiver plikter å gi alle ansatte en skriftlig arbeidsavtale.' },

  { id:'r-a2-3', level:'A2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva forbyr diskrimineringsloven på arbeidsplassen?',
    opts:['Å ha ulike meninger','Å behandle folk dårligere pga. kjønn, religion, alder osv.','Å ta pauser'], ans:1,
    exp:'Du kan ikke diskrimineres på grunn av kjønn, alder, etnisitet, religion eller funksjonsnedsettelse.' },

  { id:'r-a2-4', level:'A2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er «overtid»?',
    opts:['Arbeid utover normal arbeidstid som gir rett til overtidstillegg','Arbeid du gjør gratis','Ekstra ferie'], ans:0,
    exp:'Overtid er arbeid utover 37,5 timer per uke. Du har krav på minst 40 % tillegg.' },

  { id:'r-a2-5', level:'A2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'fill', q:'Du har rett til ___ pause etter 5,5 timers arbeid.',
    opts:['30 minutters','5 minutters','2 timers'], ans:0,
    exp:'Etter 5,5 timers sammenhengende arbeid har du rett til minst 30 minutters pause.' },

  { id:'r-a2-6', level:'A2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er din plikt hvis du vet at du ikke kan møte på jobb?',
    opts:['Varsle arbeidsgiver så raskt som mulig','Ingenting, det ordner seg selv','Sende en melding til kollegaen din'], ans:0,
    exp:'Du plikter å varsle arbeidsgiver umiddelbart ved fravær.' },

  // B1
  { id:'r-b1-1', level:'B1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er formålet med Arbeidsmiljøloven?',
    opts:['Sikre fullt forsvarlig arbeidsmiljø og verne arbeidstakers interesser','Fastsette minstelønn i alle bransjer','Regulere handel mellom bedrifter'], ans:0,
    exp:'AML skal sikre trygge arbeidsforhold og beskytte arbeidstakeres helse og rettigheter.' },

  { id:'r-b1-2', level:'B1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'tf', q:'Arbeidsgiver kan tvinge deg til ubegrenset overtid.',
    ans:false,
    exp:'Nei! Arbeidsmiljøloven setter grenser for maksimalt antall overtidstimer per uke og år.' },

  { id:'r-b1-3', level:'B1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er «varsling» i arbeidslivet?',
    opts:['Å si fra om kritikkverdige forhold på arbeidsplassen','Å varsle om brann','Å gi beskjed om ferie'], ans:0,
    exp:'Varsling er å melde fra om kritikkverdige forhold – du er beskyttet mot gjengjeldelse ved varsling.' },

  { id:'r-b1-4', level:'B1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er rett til medbestemmelse?',
    opts:['Ansatte og tillitsvalgte har rett til å delta i beslutningsprosesser som angår dem','Alle ansatte bestemmer like mye som sjefen','Ansatte velger sin arbeidstid'], ans:0,
    exp:'Norsk lov gir ansatte og tillitsvalgte rett til informasjon og medvirkning i bedriften.' },

  { id:'r-b1-5', level:'B1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er «ferieloven»?',
    opts:['Loven som gir alle ansatte rett til minst 25 virkedagers ferie per år','En lov om åpningstider i butikker','En lov om reiser til utlandet'], ans:0,
    exp:'Ferieloven sikrer alle ansatte minimum 25 virkedager (ca. 4 uker + 1 dag) ferie.' },

  { id:'r-b1-6', level:'B1', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'fill', q:'Arbeidsavtalen skal alltid inngås ___ mellom arbeidsgiver og arbeidstaker.',
    opts:['skriftlig','muntlig','digitalt'], ans:0,
    exp:'Arbeidsmiljøloven krever skriftlig arbeidsavtale for alle ansettelsesforhold.' },

  // B2
  { id:'r-b2-1', level:'B2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er «sterkt stillingsvern» i Norge?',
    opts:['Arbeidstaker kan bare sies opp på saklig grunnlag – noe som gir stor trygghet','At man aldri kan sies opp','At oppsigelse må godkjennes av Stortinget'], ans:0,
    exp:'Norsk stillingsvern er sterkt: arbeidsgiver må ha saklig grunn (økonomi, adferd el. egnethet).' },

  { id:'r-b2-2', level:'B2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er «fortrinnsrett»?',
    opts:['Tidligere deltidsansatte har fortrinnsrett til utvidet stilling framfor nyansettelse','Seniorer har fortrinnsrett til alle stillinger','Alle ansatte søker interne stillinger først'], ans:0,
    exp:'AML § 14-3 gir deltidsansatte fortrinnsrett til utvidet stilling fremfor nyansettelse.' },

  { id:'r-b2-3', level:'B2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'tf', q:'Arbeidsgiver kan fritt endre ansettelsesvilkår uten å informere ansatte.',
    ans:false,
    exp:'Nei! Vesentlige endringer i arbeidsavtalen krever avtale med arbeidstaker og eventuelt tillitsvalgt.' },

  { id:'r-b2-4', level:'B2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er «kollektiv arbeidsrett»?',
    opts:['Regler om fagforeninger, tariffavtaler og kollektive forhandlinger','Regler om rettigheter i offentlig transport','Arbeidsregler for grupper av bedrifter'], ans:0,
    exp:'Kollektiv arbeidsrett regulerer forholdet mellom fagforeninger, arbeidsgivere og deres organisasjoner.' },

  { id:'r-b2-5', level:'B2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er «bedriftsdemokratiet» i norsk rett?',
    opts:['Ansattes rett til å velge representanter til bedriftens styrende organer','Direktedemokrati der alle ansatte stemmer','At bedriften støtter lokalt demokrati'], ans:0,
    exp:'I større bedrifter har ansatte rett til styrerepresentasjon etter aksjeloven og representasjonsforskriften.' },

  { id:'r-b2-6', level:'B2', cat:'rettigheter', catName:'Rettigheter og plikter', catIcon:'⚖️', catColor:'#1A237E',
    type:'mc', q:'Hva er «likestillings- og diskrimineringsloven»?',
    opts:['Loven som forbyr diskriminering og sikrer likeverd uavhengig av kjønn, etnisitet, religion m.m.','En lov om lik lønn kun i offentlig sektor','En lov om lik arbeidstid'], ans:0,
    exp:'Loven dekker alle diskrimineringsgrunnlag og gjelder for hele arbeidslivet.' },

  /* ===================== ARBEIDSKULTUR ===================== */
  // A1
  { id:'ak-a1-1', level:'A1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Kaller mange norske ansatte sjefen sin med fornavn?',
    opts:['Ja','Nei, alltid etternavn','De kaller sjefen «herr» eller «fru»'], ans:0,
    exp:'Ja! I Norge er det vanlig og akseptert å kalle sjefen ved fornavn.' },

  { id:'ak-a1-2', level:'A1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'tf', q:'Det er viktig å komme presist til jobb i Norge.',
    ans:true,
    exp:'Riktig! Punktlighet er viktig i norsk arbeidskultur. Kom i tide – helst litt før.' },

  { id:'ak-a1-3', level:'A1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Kan du si din mening på jobb i Norge, selv om sjefen er til stede?',
    opts:['Ja, det er vanlig','Nei, aldri','Bare hvis sjefen spør'], ans:0,
    exp:'I Norge oppfordres ansatte til å dele sin mening. Åpen dialog er en viktig verdi.' },

  { id:'ak-a1-4', level:'A1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Er det greit å ta pause og spise lunsj i Norge?',
    opts:['Ja, du har rett til pause','Nei, du skal alltid jobbe','Bare sjefer har lov'], ans:0,
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
    opts:['Det er liten avstand mellom ledere og ansatte','Bygningen er på ett plan','Alle tjener like mye'], ans:0,
    exp:'Flat struktur betyr at det er kort avstand mellom ansatte og ledelse – og lite hierarki.' },

  { id:'ak-a2-2', level:'A2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva snakker man gjerne om i lunsjpausen i Norge?',
    opts:['Vær, helg, TV og fritid','Politikk og religion','Kollegers privatliv'], ans:0,
    exp:'Lys smalltalk om vær, helg, natur og hverdagsliv er vanlig og akseptert.' },

  { id:'ak-a2-3', level:'A2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'tf', q:'I Norge sier folk «hei» og bruker fornavn til alle, uansett stilling.',
    ans:true,
    exp:'Riktig! Uformell hilsing og fornavn er normen på norske arbeidsplasser.' },

  { id:'ak-a2-4', level:'A2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva er «dugnadsånd»?',
    opts:['Frivillig samarbeid for felles nytte','En type norsk mat','En ny type arbeidstid'], ans:0,
    exp:'Dugnad er en norsk tradisjon med frivillig fellesarbeid. Denne ånden preger mange arbeidsplasser.' },

  { id:'ak-a2-5', level:'A2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva er «work-life balance»?',
    opts:['Balanse mellom jobb og privatliv','Et treningsprogram','En regel om arbeidstid'], ans:0,
    exp:'Norge scorer høyt på work-life balance. Privatliv og familietid er verdsatt.' },

  { id:'ak-a2-6', level:'A2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'fill', q:'Norge har ___ strukturer på arbeidsplassen – det vil si lite hierarki.',
    opts:['flate','bratte','steile'], ans:0,
    exp:'Flate strukturer betyr at det er kort avstand mellom leder og ansatt.' },

  // B1
  { id:'ak-b1-1', level:'B1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva kjennetegner den norske arbeidsmodellen?',
    opts:['Samarbeid mellom stat, arbeidsgiver og fagforeninger med lavt konfliktnivå','Streng hierarkisk struktur og lydighet','Individuelle forhandlinger uten fagforeninger'], ans:0,
    exp:'Den norske modellen er basert på trepartssamarbeid og tillit mellom partene.' },

  { id:'ak-b1-2', level:'B1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'tf', q:'I Norge forventes det at ansatte tar egne initiativ og er selvstendige.',
    ans:true,
    exp:'Riktig! Norsk lederstil er delegerende – ansatte forventes å ta ansvar uten detaljstyring.' },

  { id:'ak-b1-3', level:'B1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva er «Janteloven»?',
    opts:['En uformell sosial norm om å ikke tro at man er bedre enn andre','En norsk arbeidslov','En skattelov'], ans:0,
    exp:'Janteloven er en kulturell norm som vektlegger fellesskap og likhet framfor individuell skryt.' },

  { id:'ak-b1-4', level:'B1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva betyr «tillit» i norsk arbeidsliv?',
    opts:['Ansatte har stor frihet og autonomi fordi de forventes å levere resultater','En type arbeidsavtale','En regel om overtid'], ans:0,
    exp:'Tillit er grunnleggende i norsk arbeidsliv – frihet under ansvar er et sentralt prinsipp.' },

  { id:'ak-b1-5', level:'B1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva betyr «inkluderende arbeidsliv» (IA)?',
    opts:['Å inkludere alle uavhengig av bakgrunn, helse og alder','En lov om internasjonal ansettelse','Et inkluderingsprogram i barnehagen'], ans:0,
    exp:'IA-arbeidet handler om å redusere sykefravær og inkludere alle i arbeidslivet.' },

  { id:'ak-b1-6', level:'B1', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'fill', q:'«___ dumping» betyr at utenlandske arbeidstakere jobber til under norske lønnsvilkår.',
    opts:['Sosial','Lønns','Digital'], ans:0,
    exp:'Sosial dumping er et alvorlig problem som undergrave norske lønns- og arbeidsvilkår.' },

  // B2
  { id:'ak-b2-1', level:'B2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva kjennetegner norsk lederskap?',
    opts:['Delegerende, ikke-autoritær lederstil med fokus på medarbeidertilfredshet','Sterk hierarkisk kontroll og detaljstyring','Transaksjonsorientert ledelse med kortsiktig fokus'], ans:0,
    exp:'Norsk ledelse er kjent for å være tillitsbasert, lite autoritær og fokusert på teamet.' },

  { id:'ak-b2-2', level:'B2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'tf', q:'Norge scorer konsekvent høyt på tillit og lavt på korrupsjon internasjonalt.',
    ans:true,
    exp:'Riktig! Norge er blant verdens minst korrupte land (Transparency International) og scorer høyt på tillit.' },

  { id:'ak-b2-3', level:'B2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva er «psykologisk trygghet» på arbeidsplassen?',
    opts:['Et miljø der ansatte tør å si sin mening og ta risiko uten frykt for represalier','En ordning om psykologhjelp på jobb','En forsikring mot mobbing'], ans:0,
    exp:'Psykologisk trygghet øker innovasjon, læring og trivsel (Amy Edmondson).' },

  { id:'ak-b2-4', level:'B2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva er «arbeidslinja» i norsk politikk?',
    opts:['En politikk om at flest mulig skal delta i arbeidslivet framfor å leve av stønad','En regel om jernbanedrift','En ordning for permitteringer'], ans:0,
    exp:'Arbeidslinja er et kjernebegrep i norsk velferdspolitikk siden 1990-tallet.' },

  { id:'ak-b2-5', level:'B2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva er «tillitsreformen» i offentlig sektor?',
    opts:['En reform som gir offentlig ansatte mer tillit og autonomi for å gi bedre tjenester','En reform som øker kontroll med offentlig ansatte','En pensjonsreform'], ans:0,
    exp:'Tillitsreformen (fra 2021) skal redusere detaljstyring og gi mer faglig frihet i offentlig sektor.' },

  { id:'ak-b2-6', level:'B2', cat:'arbeidskultur', catName:'Arbeidskultur', catIcon:'🤝', catColor:'#880E4F',
    type:'mc', q:'Hva betyr «mangfold og inkludering» (M&I) på norske arbeidsplasser?',
    opts:['Bevisst arbeid for å sikre representasjon og likeverd for alle grupper','En type opplæringsplan','En lov om ansettelse av fremmedspråklige'], ans:0,
    exp:'M&I-arbeid handler om å verdsette ulikheter og sikre at alle har like muligheter.' },

  /* ===================== CV OG NAV ===================== */
  // A1
  { id:'cn-a1-1', level:'A1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er en CV?',
    opts:['En liste over jobber og utdanning du har hatt','Et brev til sjefen','En søknad om penger'], ans:0,
    exp:'CV (Curriculum Vitae) viser din utdanning og arbeidserfaring.' },

  { id:'cn-a1-2', level:'A1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er NAV?',
    opts:['Et sykehus','Et offentlig kontor som hjelper deg med jobb og stønad','En skole'], ans:1,
    exp:'NAV (Arbeids- og velferdsetaten) hjelper folk med jobb, sykepenger, dagpenger og mer.' },

  { id:'cn-a1-3', level:'A1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'tf', q:'Du skriver CV når du søker jobb.',
    ans:true,
    exp:'Riktig! CV er et viktig dokument når du søker jobb.' },

  { id:'cn-a1-4', level:'A1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er dagpenger?',
    opts:['Penger du tjener hver dag','Penger fra NAV når du er uten jobb','Penger fra banken'], ans:1,
    exp:'Dagpenger er stønad fra NAV mens du er arbeidsledig og søker ny jobb.' },

  { id:'cn-a1-5', level:'A1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'tf', q:'Kan NAV hjelpe deg med å finne jobb?',
    ans:true,
    exp:'Riktig! NAV tilbyr jobbveiledning, arbeidsmarkedstiltak og hjelp til å skrive CV.' },

  { id:'cn-a1-6', level:'A1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'fill', q:'Du finner ledige stillinger på ___.no.',
    opts:['nav','politiet','skatteetaten'], ans:0,
    exp:'nav.no har mange ledige stillinger. Du kan også søke på finn.no.' },

  // A2
  { id:'cn-a2-1', level:'A2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er tiltakspenger?',
    opts:['Penger du får fra NAV mens du er i arbeidsmarkedstiltak','Penger til mat','Lønn fra arbeidsgiver'], ans:0,
    exp:'Tiltakspenger er stønad fra NAV mens du deltar på kurs, praksis eller andre tiltak.' },

  { id:'cn-a2-2', level:'A2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er en referanse på en CV?',
    opts:['En person som kan bekrefte din erfaring og egenskaper','En bok du har lest','En lenke til et nettsted'], ans:0,
    exp:'En referanse er en person (f.eks. tidligere arbeidsgiver) som kan anbefale deg til ny jobb.' },

  { id:'cn-a2-3', level:'A2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'tf', q:'En CV bør helst ikke være lengre enn 1–2 sider.',
    ans:true,
    exp:'Riktig! En kort og oversiktlig CV er best. Arbeidsgiver har ikke tid til å lese mange sider.' },

  { id:'cn-a2-4', level:'A2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er en «motivasjonsbrief» (søknadsbrev)?',
    opts:['Et brev der du forklarer hvorfor du vil ha jobben','Et brev til familien','En medisinsk attest'], ans:0,
    exp:'I søknadsbrevet presenterer du deg selv og forklarer hvorfor du er rett person for jobben.' },

  { id:'cn-a2-5', level:'A2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er en NAV-veileder?',
    opts:['En person på NAV som hjelper deg med jobb og stønad','En lege på NAV','En lærer på NAV'], ans:0,
    exp:'NAV-veilederen din er din kontaktperson og hjelper deg med aktivitetsplan og søknader.' },

  { id:'cn-a2-6', level:'A2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'fill', q:'Jeg tilpasser søknaden min til hver ___ jeg søker.',
    opts:['stilling','CV','skole'], ans:0,
    exp:'Det er viktig å tilpasse søknaden til den konkrete stillingen du søker på.' },

  // B1
  { id:'cn-b1-1', level:'B1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er en «aktivitetsplan» hos NAV?',
    opts:['En plan for hva du skal gjøre for å komme i jobb','En treningsplan','En plan for ferie'], ans:0,
    exp:'Aktivitetsplanen er en felles plan mellom deg og NAV med konkrete steg mot arbeid.' },

  { id:'cn-b1-2', level:'B1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er et «meldekort» hos NAV?',
    opts:['Et skjema du sender NAV annenhver uke for å bekrefte at du er aktiv arbeidssøker','Et julekort til NAV','Et skjema for ny adresse'], ans:0,
    exp:'Meldekort sendes digitalt på nav.no. Glemmer du det, mister du ytelsen for perioden.' },

  { id:'cn-b1-3', level:'B1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'tf', q:'NAV finansierer kurs og opplæring for arbeidssøkere.',
    ans:true,
    exp:'Riktig! NAV kan gi tilskudd til kurs, fagbrev og annen opplæring som øker jobbsjansene.' },

  { id:'cn-b1-4', level:'B1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er gode egenskaper å nevne i en jobbsøknad?',
    opts:['Samarbeidsevne, fleksibilitet og initiativ','Treningsvaner og matpreferanser','Politiske meninger'], ans:0,
    exp:'Arbeidsgivere setter pris på samarbeidsevne, ansvarsfølelse, fleksibilitet og selvstendighet.' },

  { id:'cn-b1-5', level:'B1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er «hull i CV»?',
    opts:['Perioder uten arbeid eller utdanning som du bør forklare positivt','Feil stavemåte i CV-en','Perioder med deltidsjobb'], ans:0,
    exp:'Hull er perioder uten registrert aktivitet. Forklar dem kort og positivt (f.eks. omsorg, reise, kurs).' },

  { id:'cn-b1-6', level:'B1', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'fill', q:'Etter å ha sendt søknaden bør du følge opp med en ___ henvendelse etter 1–2 uker.',
    opts:['høflig','kritisk','uformell'], ans:0,
    exp:'En høflig oppfølging viser initiativ og interesse for stillingen.' },

  // B2
  { id:'cn-b2-1', level:'B2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er «ATS» (Applicant Tracking System)?',
    opts:['Programvare som automatisk sorterer søknader basert på nøkkelord','En type arbeidsavtale','Et prøvesystem hos NAV'], ans:0,
    exp:'ATS brukes av mange store bedrifter. Bruk nøkkelord fra stillingsannonsen i CV og søknad.' },

  { id:'cn-b2-2', level:'B2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er «kvalifiseringsprogrammet»?',
    opts:['Et intensivt program for personer med svak tilknytning til arbeidslivet med tett NAV-oppfølging','Et kurs i norsk for innvandrere','Et program for ungdom som dropper ut'], ans:0,
    exp:'Kvalifiseringsprogrammet er for de med størst utfordringer og gir tett individuell oppfølging.' },

  { id:'cn-b2-3', level:'B2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'tf', q:'Nøkkelord fra stillingsannonsen bør brukes i søknaden for å passere ATS-systemer.',
    ans:true,
    exp:'Riktig! ATS-systemer matcher nøkkelord i søknaden mot kravene i stillingsannonsen.' },

  { id:'cn-b2-4', level:'B2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er en «elevator pitch» i jobbsammenheng?',
    opts:['En kort og overbevisende selvpresentasjon på 30–60 sekunder','En heis-teknikk for intervjuer','Et brev til HR-avdelingen'], ans:0,
    exp:'Elevator pitch brukes i nettverk og intervjuer – øv på å presentere deg selv kompakt og tydelig.' },

  { id:'cn-b2-5', level:'B2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva er forskjellen på kronologisk og funksjonell CV?',
    opts:['Kronologisk lister erfaringer tidsmessig, funksjonell grupperer etter kompetanseområder','Kronologisk er alltid lengst','Funksjonell brukes bare av ledere'], ans:0,
    exp:'Velg kronologisk ved sterk erfaring. Funksjonell passer ved hull eller karriereskifte.' },

  { id:'cn-b2-6', level:'B2', cat:'cv_nav', catName:'CV og NAV', catIcon:'📄', catColor:'#01579B',
    type:'mc', q:'Hva bør du undersøke om bedriften før et jobbintervju?',
    opts:['Bedriftens visjon, verdier, produkter/tjenester og nylige nyheter','Intervjuerens private bakgrunn','Konkurrentenes lønnsvilkår'], ans:0,
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
