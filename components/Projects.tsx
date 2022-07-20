import Image from 'next/image'
import Link from 'next/link'
import { Link as About, animateScroll as scroll } from 'react-scroll'

export const Projects = () => {
  return (
    <div id="projects" className="my-12 w-full">
      <h1 className="text-blue-700 font-bold text-6xl text-center mb-10">
        Projects
      </h1>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <About
          activeClass={'about'}
          to={'about'}
          offset={-50}
          duration={500}
          smooth={true}
        >
          <div className="bg-gray-50 max-w-[450px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
            <Image
              src={'/img/favourakomlafe.png'}
              width={450}
              height={300}
              layout={'responsive'}
              className="shadow-md"
            />

            <div className="block p-5">
              <h2 className="text-blue-600 text-lg font-semibold mb-3">
                Favour Akomolafe Portfolio
              </h2>
              <p className="text-gray-400 font-medium">
                This portfolio site is aimed at showcasing completed projects by
                Favour Akomolafe. <br /> <br />Favour Akomolafe is a software
                developer at Behruz Hybrid, a software development company aimed
                at offering secure, scalable and desired products to clients.
                
                <br /> <br /> Visitors can send a message discussing their next
                project or schedule a meeting with him via this site.
              </p>
            </div>
          </div>
        </About>

        <Link href={'madcuisine'} target={'_blank'}>
          <div className="bg-gray-50 max-w-[450px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
            <Image
              src={'/img/madcuisines.png'}
              width={450}
              height={300}
              layout={'responsive'}
              className="shadow-md"
            />

            <div className="block p-5">
              <h2 className="text-teal-400 text-lg font-semibold mb-3">
                Madcuisines
              </h2>
              <p className="text-gray-400 font-medium">
                Madcuisines is a Uk meal booking app where customers order their
                desired meals and get it delivered to them timely at their
                desired locations. <br /> <br /> Products are orders are
                monitored and managed by authorized personnels via Madcuisines
                admin panel.
              </p>
            </div>
          </div>
        </Link>

        <Link href={'http://savioursassembly.com/'} target={'_blank'}>
          <div className="bg-gray-50 max-w-[450px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
            <Image
              src={'/img/savioursassembly.png'}
              width={450}
              height={300}
              layout={'responsive'}
              className="w-full, h-full"
            />

            <div className="block p-5">
              <h2 className="text-red-400 text-lg font-semibold mb-3">
                Saviours Assembly
              </h2>
              <p className="text-gray-400 font-medium">
                Saviours Assembly is a Bible believing church with faith and
                creed centred on Christ and the reality of what He has done in
                his death, burial and resurrection. <br />
                <br />
                Members of the church have access to audio sermons and daily
                devotions on the official website of Saviours Assembly.
              </p>
            </div>
          </div>
        </Link>

        <Link href={'http://medvistadiagnostics.com/'} target={'_blank'}>
          <div className="bg-gray-50 max-w-[450px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
            <Image
              src={'/img/medvista.png'}
              width={450}
              height={300}
              layout={'responsive'}
              className="shadow-md"
            />

            <div className="block p-5">
              <h2 className="text-blue-400 text-lg font-semibold mb-3">
                Medvista Diagnostics
              </h2>
              <p className="text-gray-400 font-medium">
                Medvista Diagnostic Services is Nigeria's fastest growing
                medical diagnostics centre. They render quality and affordable
                healthcare services to patients. <br /> <br /> Patients can
                schedule an appointment, see a list of rendered services and
                contact information on the web app.
              </p>
            </div>
          </div>
        </Link>

        <Link href={'http://biosec.com.ng/'} target={'_blank'}>
          <div className="bg-gray-50 max-w-[450px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
            <Image
              src={'/img/biosecsolutions.png'}
              width={450}
              height={300}
              layout={'responsive'}
              className="shadow-md"
              alt="Biosec Solutions"
            />

            <div className="block p-5">
              <h2 className="text-blue-600 text-lg font-semibold mb-3">
                Biosec Solutions
              </h2>
              <p className="text-gray-400 font-medium">
                Biosec Solutions is an identity management consultancy with core
                biometrics, smart card, token based enterprise architecture
                strengths with cummulative experience of over 30 years. <br />{' '}
                <br /> The official website displays information about offered
                services, clients and affiliates, projects and products of
                Biosec Solutions.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
