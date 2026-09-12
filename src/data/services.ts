export type ServiceContentItem = { title: string; description: string };
export type ServiceFaqItem = { question: string; answer: string };

export type Service = {
  name: string;
  slug: string;
  shortDescription: string;
  listingTitle: string;
  listingDescription: string;
  cardImage: { src: string; alt: string };
  detail: {
    heroLead: string;
    overview: { title: string; paragraphs: readonly [string, string] };
    process: {
      title: string;
      items: readonly [ServiceContentItem, ServiceContentItem, ServiceContentItem];
    };
    goals: { title: string; items: readonly ServiceContentItem[] };
    before: readonly ServiceContentItem[];
    after: readonly ServiceContentItem[];
    faq: readonly ServiceFaqItem[];
    relatedService: { slug: string; description: string };
    finalCta: { title: string; description: string };
  };
};

const regionalPreparation = [
  {
    title: "Hazırlık bilgisini takip edin",
    description:
      "Planlanan uygulamaya özel bir hazırlık gerekiyorsa randevu öncesinde verilen bilgilendirmeyi dikkate alın.",
  },
  {
    title: "Önemli durumları önceden belirtin",
    description:
      "Uygulama sürecini etkileyebileceğini düşündüğünüz önemli bir durum varsa bunu işlem öncesinde paylaşın.",
  },
] as const;

const regionalFollowUp = [
  {
    title: "Paylaşılan yönlendirmeleri dikkate alın",
    description:
      "Uygulama sonrasında hizmete özel olarak verilen genel bakım ve süreç bilgilerini takip edin.",
  },
  {
    title: "Günlük bakımınızı yönlendirmeye göre sürdürün",
    description:
      "Uygulama sonrasındaki bakım rutininiz için paylaşılan hizmete özel önerileri dikkate alın.",
  },
  {
    title: "Sonraki adımı ihtiyaç doğrultusunda değerlendirin",
    description:
      "Bakım sürecinin devamı düşünülüyorsa sonraki uygulama ve takip planı kişisel ihtiyaçlara göre ayrıca değerlendirilebilir.",
  },
] as const;

const regionalFaqTail = [
  {
    question: "Kaç uygulama gerekir?",
    answer:
      "Gerekli uygulama sayısı bakım hedeflerine, uygulama alanına ve sürecin nasıl ilerlediğine göre değişebilir. Sabit bir sayı vermek yerine sürecin ihtiyaç doğrultusunda değerlendirilmesi daha doğru olur.",
  },
  {
    question: "Uygulama sonrasında nelere dikkat edilmelidir?",
    answer:
      "Uygulama sonrasında paylaşılan genel bakım ve süreç yönlendirmelerini dikkate alın. Uygulama alanında sizi rahatsız eden olağan dışı bir durum fark ederseniz profesyonel görüş alın.",
  },
] as const;

export const services = [
  {
    name: "Cilt Bakımı",
    slug: "cilt-bakimi",
    shortDescription:
      "Cildinizin ihtiyaçlarına göre şekillenen, yenileyici ve özenli bakım uygulamaları.",
    listingTitle: "Cildinizin ihtiyaçlarına göre şekillenen bakım.",
    listingDescription:
      "Cildinizin ihtiyaçlarını dikkate alan bakım yaklaşımıyla, daha dengeli ve özenli bir bakım deneyimi sunuyoruz. Uygulama süreci kişisel ihtiyaçlara göre değerlendirilir ve buna uygun şekilde planlanır.",
    cardImage: {
      src: "/images/services/cilt-bakimi/service-cilt-bakimi-card.png",
      alt: "Uzman eşliğinde uygulanan profesyonel yüz bakımı",
    },
    detail: {
      heroLead:
        "Cildinizin ihtiyaçlarına göre şekillenen, sakin ve özenli bir bakım yaklaşımı.",
      overview: {
        title: "Cildinize ihtiyaç odaklı ve özenli bir yaklaşım.",
        paragraphs: [
          "Cilt bakımı, cildin mevcut görünümünü ve bakım ihtiyaçlarını dikkate alan uygulamaların kişiye göre şekillendirilmesi üzerine kurulu bir bakım sürecidir. Amaç, tek tip bir uygulama sunmak yerine cildin ihtiyaçlarına uygun ve özenli bir bakım deneyimi oluşturmaktır.",
          "Elora’da süreç, bakım öncesinde ihtiyaçların değerlendirilmesiyle başlar. Uygulama yaklaşımı bu değerlendirmeye göre şekillendirilir; konforlu, sakin ve kontrollü bir deneyim sunulması önceliklendirilir.",
        ],
      },
      process: {
        title: "Cilt bakımınız üç temel adımda şekillenir.",
        items: [
          {
            title: "Cildinizin ihtiyaçlarını anlamak",
            description:
              "Bakım öncesinde cildin mevcut görünümü, bakım beklentiniz ve ihtiyaçlarınız değerlendirilir. Bu ilk adım, uygulama yaklaşımının size göre şekillendirilmesine yardımcı olur.",
          },
          {
            title: "İhtiyaca göre planlanan bakım",
            description:
              "Değerlendirme doğrultusunda belirlenen bakım yaklaşımı sakin ve kontrollü bir süreç içinde uygulanır. Amaç, standart bir uygulama tekrarlamak yerine bakım deneyimini mevcut ihtiyaca göre şekillendirmektir.",
          },
          {
            title: "Bakım sonrasında bilgilendirme",
            description:
              "Uygulama tamamlandıktan sonra genel bakım süreci hakkında gerekli bilgilendirme paylaşılır. İhtiyaca göre sonraki bakım adımları ayrıca değerlendirilebilir.",
          },
        ],
      },
      goals: {
        title: "Cilt bakımı hangi ihtiyaçlar için değerlendirilebilir?",
        items: [
          { title: "Bakım rutinini desteklemek", description: "Cilt bakımını daha düzenli ve ihtiyaç odaklı bir rutinin parçası haline getirmek isteyenler için değerlendirilebilir." },
          { title: "Cildin mevcut görünümüne özen göstermek", description: "Cildin genel görünümünü ve bakım ihtiyacını dikkate alan, daha kontrollü bir bakım deneyimi hedeflenebilir." },
          { title: "İhtiyaca göre şekillenen bakım almak", description: "Tek tip uygulama yerine, mevcut bakım ihtiyacına göre planlanan daha kişisel bir yaklaşım tercih edilebilir." },
          { title: "Düzenli bakım süreci oluşturmak", description: "Tek seferlik bir uygulamadan çok, ihtiyaç oldukça değerlendirilebilecek sürdürülebilir bir bakım yaklaşımının parçası olabilir." },
        ],
      },
      before: [
        { title: "Beklentinizi paylaşın", description: "Bakım öncesinde cildinizle ilgili beklentinizi ve özellikle üzerinde durulmasını istediğiniz noktaları paylaşabilirsiniz." },
        { title: "Mevcut bakım rutininizi belirtin", description: "Düzenli kullandığınız bakım ürünleri veya yakın zamanda yaptırdığınız uygulamalar varsa bunları bakım öncesinde belirtmeniz sürecin daha doğru değerlendirilmesine yardımcı olur." },
        { title: "Sorularınızı önceden iletin", description: "Uygulamanın nasıl ilerleyeceğiyle ilgili merak ettiğiniz konuları bakım başlamadan önce paylaşabilirsiniz." },
        { title: "Önemli durumları bildirin", description: "Bakım sürecini etkileyebileceğini düşündüğünüz önemli bir durum varsa bunu uygulama öncesinde belirtin." },
      ],
      after: [
        { title: "Paylaşılan bakım önerilerini dikkate alın", description: "Uygulama sonrasında size aktarılan genel bakım önerilerini takip edin." },
        { title: "Cildinizi gözlemleyin", description: "Bakım sonrasında cildinizin verdiği tepkileri gözlemleyin ve sizi rahatsız eden olağan dışı bir durum olduğunda profesyonel görüş alın." },
        { title: "Günlük bakımınızı ihtiyaca göre sürdürün", description: "Bakım rutininizin nasıl devam edeceği konusunda verilen hizmete özel yönlendirmeleri dikkate alın." },
        { title: "Sonraki bakım adımını gerektiğinde değerlendirin", description: "Yeni bir bakım ihtiyacı oluştuğunda veya düzenli bakım planı düşünüyorsanız sonraki adım ayrıca değerlendirilebilir." },
      ],
      faq: [
        { question: "Cilt bakımı nasıl planlanır?", answer: "Bakım yaklaşımı, cildin mevcut görünümü, bakım ihtiyacı ve beklentiler değerlendirilerek şekillendirilir. Bu nedenle her bakım sürecinin tamamen aynı şekilde ilerlemesi gerekmez." },
        { question: "Uygulama ne kadar sürer?", answer: "Uygulama süresi, planlanan bakımın kapsamına ve ihtiyaçlara göre değişebilir. Randevu öncesinde veya değerlendirme sırasında süreç hakkında daha net bilgi paylaşılabilir." },
        { question: "Kaç kez cilt bakımı yaptırmak gerekir?", answer: "Bakım sıklığı kişisel ihtiyaçlara, mevcut bakım rutinine ve tercih edilen uygulamaya göre değişebilir. Tek bir sabit sayı yerine, sonraki bakım ihtiyacının süreç içinde değerlendirilmesi daha doğru bir yaklaşımdır." },
        { question: "Cilt bakımı öncesinde hazırlık gerekir mi?", answer: "Planlanan bakıma özel bir hazırlık gerekiyorsa gerekli bilgilendirme randevu öncesinde paylaşılmalıdır. Düzenli kullandığınız bakım ürünleri veya yakın zamanda yaptırdığınız uygulamalar varsa bunları önceden belirtmeniz değerlendirmeye yardımcı olabilir." },
        { question: "Cilt bakımı sonrasında nelere dikkat edilmelidir?", answer: "Uygulama sonrasında verilen hizmete özel bakım yönlendirmelerini dikkate almak önemlidir. Cildinizde sizi rahatsız eden olağan dışı bir durum fark ederseniz profesyonel görüş almanız uygun olur." },
      ],
      relatedService: {
        slug: "lazer-epilasyon",
        description: "Konfor ve düzenli bakım odağıyla planlanan profesyonel lazer epilasyon uygulamalarını keşfedin.",
      },
      finalCta: {
        title: "Cilt bakımınız için randevunuzu planlayın.",
        description: "Size uygun zamanı seçin ve bakımınızı kolayca planlayın.",
      },
    },
  },
  {
    name: "Lazer Epilasyon",
    slug: "lazer-epilasyon",
    shortDescription: "Konfor ve düzenli bakım odağıyla planlanan profesyonel lazer epilasyon uygulamaları.",
    listingTitle: "Konforlu ve düzenli bir bakım süreci.",
    listingDescription: "Lazer epilasyon uygulamalarını konfor, düzenli takip ve özenli süreç yönetimi odağında ele alıyoruz. Uygulama yaklaşımı ihtiyaçlara göre değerlendirilir ve süreç hakkında gerekli bilgiler açık biçimde paylaşılır.",
    cardImage: {
      src: "/images/services/lazer-epilasyon/service-lazer-epilasyon-card.png",
      alt: "Profesyonel cihazla uygulanan lazer epilasyon bakımı",
    },
    detail: {
      heroLead: "Konfor, düzenli takip ve özenli süreç yönetimi odağında planlanan profesyonel bir bakım yaklaşımı.",
      overview: {
        title: "Bakım sürecini konfor ve düzenli takiple ele alan bir yaklaşım.",
        paragraphs: [
          "Lazer epilasyon, belirlenen uygulama alanlarının ihtiyaçları doğrultusunda planlanan teknoloji destekli bir bakım sürecidir. Sürecin tek tip bir uygulama olarak değil, kişinin ihtiyaçları ve uygulama alanı dikkate alınarak değerlendirilmesi önemlidir.",
          "Elora’da lazer epilasyon yaklaşımı; konforlu bir uygulama deneyimi, açık bilgilendirme ve düzenli süreç takibi üzerine kuruludur. Uygulama öncesinde ihtiyaçlar değerlendirilir ve sürecin nasıl ilerleyeceği kullanıcıyla anlaşılır biçimde paylaşılır.",
        ],
      },
      process: {
        title: "Lazer epilasyon süreci üç temel adımda planlanır.",
        items: [
          { title: "İhtiyaç ve uygulama alanının değerlendirilmesi", description: "Uygulama öncesinde bakım beklentiniz ve işlem yapılması planlanan alan değerlendirilir. Bu aşama, sürecin nasıl ilerleyeceğinin daha doğru biçimde belirlenmesine yardımcı olur." },
          { title: "Kontrollü ve planlı uygulama", description: "Belirlenen yaklaşım doğrultusunda lazer uygulaması kontrollü bir süreç içinde gerçekleştirilir. Uygulama boyunca konfor ve açık bilgilendirme ön planda tutulur." },
          { title: "Takip ve sonraki adımlar", description: "Uygulama sonrasında genel bakım süreci hakkında gerekli bilgilendirme paylaşılır. İhtiyaca göre sonraki uygulamalar ve süreç takibi ayrıca değerlendirilir." },
        ],
      },
      goals: {
        title: "Lazer epilasyon hangi bakım hedefleri için değerlendirilebilir?",
        items: [
          { title: "Düzenli bakım süreci oluşturmak", description: "Belirli bölgelerde daha planlı ve düzenli bir bakım rutini oluşturmak isteyenler için değerlendirilebilir." },
          { title: "Belirli uygulama alanlarına odaklanmak", description: "Bakım ihtiyacının belirli bölgelerde yoğunlaştığı durumlarda, uygulama alanına göre planlanan bir yaklaşım tercih edilebilir." },
          { title: "Teknoloji destekli bakım tercih etmek", description: "Bakım sürecini profesyonel uygulama ve teknoloji desteğiyle yürütmek isteyenler için bir seçenek olarak değerlendirilebilir." },
          { title: "Süreci kontrollü biçimde takip etmek", description: "Tek seferlik bir uygulamadan çok, ihtiyaçlara göre değerlendirilen ve düzenli takip edilebilen bir bakım süreci hedeflenebilir." },
        ],
      },
      before: [
        { title: "Uygulama alanını ve beklentinizi paylaşın", description: "Bakım öncesinde uygulama yapılmasını düşündüğünüz bölgeleri ve süreçten beklentinizi paylaşmanız, değerlendirme aşamasının daha doğru ilerlemesine yardımcı olur." },
        { title: "Önceki uygulamalar hakkında bilgi verin", description: "Aynı bölgeye yönelik yakın zamanda yaptırdığınız uygulamalar veya bakım süreçleri varsa bunları önceden belirtmeniz değerlendirmeye katkı sağlayabilir." },
        ...regionalPreparation,
      ],
      after: [
        { title: "Verilen yönlendirmeleri dikkate alın", description: "Uygulama sonrasında hizmete özel olarak paylaşılan genel bakım ve süreç bilgilerini takip edin." },
        { title: "Uygulama alanını gözlemleyin", description: "Uygulama sonrasında bölgenin durumunu gözlemleyin ve sizi rahatsız eden olağan dışı bir durum olduğunda profesyonel görüş alın." },
        { title: "Bakım rutininizi bilgilendirmeye göre sürdürün", description: "Uygulama alanıyla ilgili günlük bakımınızın nasıl devam edeceği konusunda verilen yönlendirmeleri dikkate alın." },
        { title: "Sonraki uygulamayı ihtiyaç doğrultusunda değerlendirin", description: "Sürecin devamı gerekiyorsa sonraki uygulamanın zamanı ve planı kişisel ihtiyaçlara göre ayrıca değerlendirilebilir." },
      ],
      faq: [
        { question: "Lazer epilasyon süreci nasıl planlanır?", answer: "Uygulama alanı, bakım beklentisi ve mevcut ihtiyaçlar değerlendirilerek süreç planlanır. Bu nedenle uygulama yaklaşımı kişiye ve bölgeye göre farklılaşabilir." },
        { question: "Uygulama ne kadar sürer?", answer: "Uygulama süresi, işlem yapılacak bölgeye ve planlanan uygulamanın kapsamına göre değişebilir. Daha net süre bilgisi değerlendirme sonrasında paylaşılabilir." },
        { question: "Kaç uygulama gerekir?", answer: "Gerekli uygulama sayısı kişisel ihtiyaçlara, uygulama alanına ve sürecin nasıl ilerlediğine göre değişebilir. Sabit bir seans sayısı vermek yerine sürecin ihtiyaç doğrultusunda değerlendirilmesi daha doğru olur." },
        { question: "Lazer epilasyon öncesinde hazırlık gerekir mi?", answer: "Planlanan uygulamaya özel bir hazırlık gerekiyorsa gerekli bilgi randevu öncesinde paylaşılmalıdır. Uygulama bölgesiyle ilgili yakın zamanda yaptırdığınız işlemler veya önemli gördüğünüz durumlar varsa bunları önceden belirtmeniz değerlendirmeye yardımcı olabilir." },
        { question: "Uygulama sonrasında nelere dikkat edilmelidir?", answer: "Uygulama sonrasında hizmete özel olarak paylaşılan bakım ve süreç yönlendirmelerini dikkate alın. Uygulama alanında sizi rahatsız eden olağan dışı bir durum fark ederseniz profesyonel görüş alın." },
      ],
      relatedService: { slug: "cilt-bakimi", description: "Cildinizin ihtiyaçlarına göre şekillenen, sakin ve özenli bakım yaklaşımını keşfedin." },
      finalCta: { title: "Lazer epilasyon randevunuzu planlayın.", description: "Size uygun zamanı seçin ve bakım sürecinizi kolayca planlayın." },
    },
  },
  {
    name: "G8 ile Bölgesel İncelme",
    slug: "g8-ile-bolgesel-incelme",
    shortDescription: "Bölgesel bakım hedeflerini destekleyen, kişiye göre planlanan G8 uygulamaları.",
    listingTitle: "Bölgesel bakım hedeflerini destekleyen yaklaşım.",
    listingDescription: "G8 uygulamalarını bölgesel bakım hedeflerini destekleyen, kişiye göre planlanan bir bakım yaklaşımı olarak ele alıyoruz. Uygulama süreci ihtiyaçlara göre değerlendirilir ve kontrollü bir bakım deneyimi sunacak şekilde planlanır.",
    cardImage: {
      src: "/images/services/g8/service-g8-card.png",
      alt: "Mekanik başlıklı cihazla uygulanan G8 bölgesel bakımı",
    },
    detail: {
      heroLead: "Bölgesel bakım hedeflerini destekleyen, kişiye göre planlanan kontrollü bir bakım yaklaşımı.",
      overview: {
        title: "Bölgesel bakım hedeflerine odaklanan kontrollü bir yaklaşım.",
        paragraphs: [
          "G8 ile bölgesel incelme, belirli vücut bölgelerine odaklanan ve teknoloji desteğiyle yürütülen bir bakım yaklaşımıdır. Uygulama, tek tip bir süreç olarak değil; bakım hedefi, uygulama alanı ve kişisel ihtiyaçlar dikkate alınarak değerlendirilir.",
          "Elora’da G8 uygulamaları; kişiye göre planlama, kontrollü uygulama ve süreç boyunca açık bilgilendirme yaklaşımıyla ele alınır. Amaç, abartılı sonuç vaatleri yerine bölgesel bakım hedeflerini destekleyen, konforlu ve özenli bir bakım deneyimi sunmaktır.",
        ],
      },
      process: {
        title: "G8 bakım süreci üç temel adımda planlanır.",
        items: [
          { title: "Bakım hedefi ve uygulama alanının değerlendirilmesi", description: "Uygulama öncesinde bakım hedefiniz ve odaklanılması planlanan bölgeler değerlendirilir. Bu aşama, sürecin kişisel ihtiyaçlara göre şekillendirilmesine yardımcı olur." },
          { title: "Kontrollü ve bölgesel uygulama", description: "Belirlenen bakım yaklaşımı doğrultusunda G8 uygulaması ilgili bölgelere kontrollü biçimde uygulanır. Süreç boyunca konfor ve açık bilgilendirme ön planda tutulur." },
          { title: "Takip ve sonraki bakım adımları", description: "Uygulama sonrasında genel bakım süreci hakkında bilgilendirme paylaşılır. İhtiyaca göre sonraki uygulamalar ve bakım planı ayrıca değerlendirilebilir." },
        ],
      },
      goals: {
        title: "G8 hangi bölgesel bakım hedefleri için değerlendirilebilir?",
        items: [
          { title: "Belirli bölgelere odaklanmak", description: "Bakım ihtiyacının belirli vücut bölgelerinde yoğunlaştığı durumlarda, bu alanlara odaklanan bir yaklaşım olarak değerlendirilebilir." },
          { title: "Bölgesel bakım sürecini desteklemek", description: "Mevcut bakım hedeflerini teknoloji destekli bir uygulamayla desteklemek isteyenler için bir seçenek olabilir." },
          { title: "Kişiye göre planlanan bakım tercih etmek", description: "Tek tip bir uygulama yerine, bakım hedefi ve uygulama alanına göre şekillenen daha kontrollü bir süreç tercih edilebilir." },
          { title: "Düzenli takip edilebilir bir bakım planı oluşturmak", description: "Tek seferlik bir işlemden çok, ihtiyaçlara göre değerlendirilebilecek ve süreç içinde takip edilebilecek bir bakım yaklaşımı hedeflenebilir." },
        ],
      },
      before: [
        { title: "Bakım hedefinizi paylaşın", description: "Odaklanmak istediğiniz bölgeleri ve bakım sürecinden beklentinizi uygulama öncesinde paylaşmanız değerlendirme aşamasına yardımcı olur." },
        { title: "Önceki uygulamalar hakkında bilgi verin", description: "Aynı bölgelere yönelik yakın zamanda yaptırdığınız bakım veya uygulamalar varsa bunları önceden belirtmeniz sürecin daha doğru değerlendirilmesine katkı sağlayabilir." },
        ...regionalPreparation,
      ],
      after: [
        regionalFollowUp[0],
        { title: "Uygulama bölgesini gözlemleyin", description: "Bakım sonrasında uygulama yapılan bölgeleri gözlemleyin ve sizi rahatsız eden olağan dışı bir durum olduğunda profesyonel görüş alın." },
        regionalFollowUp[1],
        regionalFollowUp[2],
      ],
      faq: [
        { question: "G8 uygulaması nasıl planlanır?", answer: "Bakım hedefi, odaklanılması düşünülen bölgeler ve kişisel ihtiyaçlar değerlendirilerek süreç planlanır. Bu nedenle uygulama yaklaşımı her kullanıcı için tamamen aynı olmak zorunda değildir." },
        { question: "Uygulama ne kadar sürer?", answer: "Uygulama süresi, odaklanılan bölgeye ve planlanan bakımın kapsamına göre değişebilir. Daha net süre bilgisi değerlendirme sonrasında paylaşılabilir." },
        regionalFaqTail[0],
        { question: "G8 uygulaması öncesinde hazırlık gerekir mi?", answer: "Hizmete özel bir hazırlık gerekiyorsa gerekli bilgilendirme randevu öncesinde paylaşılmalıdır. Aynı bölgeye yönelik yakın zamanda yaptırdığınız uygulamalar veya önemli gördüğünüz durumlar varsa bunları önceden belirtmeniz değerlendirmeye yardımcı olabilir." },
        regionalFaqTail[1],
      ],
      relatedService: { slug: "ems-ile-bolgesel-zayiflama", description: "Kas aktivasyonunu destekleyen teknolojiyle bölgesel bakım deneyimini keşfedin." },
      finalCta: { title: "G8 bakımınız için randevunuzu planlayın.", description: "Size uygun zamanı seçin ve bakım sürecinizi kolayca planlayın." },
    },
  },
  {
    name: "EMS ile Bölgesel Zayıflama",
    slug: "ems-ile-bolgesel-zayiflama",
    shortDescription: "Kas aktivasyonunu destekleyen teknolojiyle bölgesel bakım deneyimi.",
    listingTitle: "Kas aktivasyonunu destekleyen teknolojiyle bölgesel bakım.",
    listingDescription: "EMS uygulamalarını kas aktivasyonunu destekleyen ve bölgesel bakım hedeflerine eşlik eden teknoloji destekli bir uygulama olarak ele alıyoruz. Süreç, kişisel ihtiyaçlar doğrultusunda değerlendirilir ve kontrollü bir bakım deneyimi sunacak şekilde planlanır.",
    cardImage: {
      src: "/images/services/ems/service-ems-card.png",
      alt: "Karın bölgesine yerleştirilen pedlerle uygulanan EMS bakımı",
    },
    detail: {
      heroLead: "Kas aktivasyonunu destekleyen teknolojiyle, bölgesel bakım hedeflerine eşlik eden kontrollü bir bakım yaklaşımı.",
      overview: {
        title: "Kas aktivasyonunu destekleyen teknoloji odaklı bölgesel bakım.",
        paragraphs: [
          "EMS ile bölgesel zayıflama, belirli vücut bölgelerine odaklanan ve elektriksel kas uyarım teknolojisinden yararlanan bir bakım yaklaşımıdır. Uygulama, tek tip bir süreç olarak değil; bakım hedefi, uygulama alanı ve kişisel ihtiyaçlar dikkate alınarak değerlendirilir.",
          "Elora’da EMS uygulamaları; kişiye göre planlama, kontrollü uygulama ve süreç boyunca açık bilgilendirme yaklaşımıyla ele alınır. Amaç, hızlı veya garantili sonuç iddiası oluşturmak yerine, kas aktivasyonunu destekleyen teknolojiyle bölgesel bakım deneyimini daha düzenli ve kontrollü biçimde sunmaktır.",
        ],
      },
      process: {
        title: "EMS bakım süreci üç temel adımda planlanır.",
        items: [
          { title: "Bakım hedefi ve uygulama alanının değerlendirilmesi", description: "Uygulama öncesinde odaklanılması planlanan bölgeler, bakım hedefiniz ve kişisel ihtiyaçlar değerlendirilir. Bu aşama, sürecin size göre şekillendirilmesine yardımcı olur." },
          { title: "Kontrollü teknoloji destekli uygulama", description: "Belirlenen bakım yaklaşımı doğrultusunda EMS uygulaması ilgili bölgelere kontrollü biçimde gerçekleştirilir. Süreç boyunca konfor, uygulama takibi ve açık bilgilendirme ön planda tutulur." },
          { title: "Takip ve sonraki bakım adımları", description: "Uygulama sonrasında genel bakım süreci hakkında gerekli bilgilendirme paylaşılır. İhtiyaca göre sonraki uygulamalar ve bakım planı ayrıca değerlendirilebilir." },
        ],
      },
      goals: {
        title: "EMS hangi bölgesel bakım hedefleri için değerlendirilebilir?",
        items: [
          { title: "Belirli bölgelere odaklanmak", description: "Bakım hedefinin belirli vücut bölgelerinde yoğunlaştığı durumlarda, bu alanlara odaklanan teknoloji destekli bir yaklaşım olarak değerlendirilebilir." },
          { title: "Kas aktivasyonunu destekleyen bakım tercih etmek", description: "Bölgesel bakım sürecine kas aktivasyonunu destekleyen bir uygulama yaklaşımı dahil etmek isteyenler için bir seçenek olabilir." },
          { title: "Kişiye göre planlanan bakım süreci oluşturmak", description: "Tek tip bir uygulama yerine, bakım hedefi ve uygulama alanına göre şekillenen daha kontrollü bir süreç tercih edilebilir." },
          { title: "Düzenli takip edilebilir bir bakım planı oluşturmak", description: "Tek seferlik bir uygulamadan çok, ihtiyaçlara göre değerlendirilebilecek ve süreç içinde takip edilebilecek bir bakım yaklaşımı hedeflenebilir." },
        ],
      },
      before: [
        { title: "Bakım hedefinizi paylaşın", description: "Odaklanmak istediğiniz bölgeleri ve bakım sürecinden beklentinizi uygulama öncesinde paylaşmanız değerlendirme aşamasının daha doğru ilerlemesine yardımcı olur." },
        { title: "Önceki uygulamalar hakkında bilgi verin", description: "Aynı bölgelere yönelik yakın zamanda yaptırdığınız bakım veya uygulamalar varsa bunları önceden belirtmeniz sürecin değerlendirilmesine katkı sağlayabilir." },
        ...regionalPreparation,
      ],
      after: [
        regionalFollowUp[0],
        { title: "Uygulama bölgesini gözlemleyin", description: "Uygulama sonrasında ilgili bölgeleri gözlemleyin ve sizi rahatsız eden olağan dışı bir durum olduğunda profesyonel görüş alın." },
        regionalFollowUp[1],
        regionalFollowUp[2],
      ],
      faq: [
        { question: "EMS uygulaması nasıl planlanır?", answer: "Bakım hedefi, odaklanılması düşünülen bölgeler ve kişisel ihtiyaçlar değerlendirilerek süreç planlanır. Bu nedenle uygulama yaklaşımı her kullanıcı için tamamen aynı olmak zorunda değildir." },
        { question: "Uygulama ne kadar sürer?", answer: "Uygulama süresi, planlanan bakımın kapsamına ve uygulama alanına göre değişebilir. Daha net süre bilgisi değerlendirme sonrasında paylaşılabilir." },
        regionalFaqTail[0],
        { question: "EMS uygulaması öncesinde hazırlık gerekir mi?", answer: "Hizmete özel bir hazırlık gerekiyorsa gerekli bilgilendirme randevu öncesinde paylaşılmalıdır. Aynı bölgeye yönelik yakın zamanda yaptırdığınız uygulamalar veya önemli gördüğünüz durumlar varsa bunları önceden belirtmeniz değerlendirmeye yardımcı olabilir." },
        regionalFaqTail[1],
      ],
      relatedService: { slug: "g8-ile-bolgesel-incelme", description: "Bölgesel bakım hedeflerini destekleyen, kişiye göre planlanan G8 bakım yaklaşımını keşfedin." },
      finalCta: { title: "EMS bakımınız için randevunuzu planlayın.", description: "Size uygun zamanı seçin ve bakım sürecinizi kolayca planlayın." },
    },
  },
] satisfies readonly Service[];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
