import Card from '../utils/Card'

function ProjectList() {
  return (
    <div className='flex justify-evenly flex-wrap bg-primary'>
      <a href="https://github.com/Grego003/nusa-karya-utama.git" target='_blank'>
        <Card
        title='Nusa Karya Utama'
        description='Web Developer'
        image='/img/nusaKarya.png'
        technology={["Laravel","Blade","MySQL","Bootstrap"]}
        duration="1300"
        />
      </a>
      <a href="https://github.com/GirandaAnugrah/Web-Comunity.git" target='_blank'>
        <Card
        title='Developer Community'
        description='Web Developer'
        image='/img/webcomunity.png'
        technology={["PHP","MySQL","Bootstrap"]}
        duration="2000"
        />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.rekost.uasKoskosanKelompok5" target='_blank'>
        <Card
        title='Rekost Mobile App'
        description='Mobile Developer'
        image='/img/rekost.png'
        technology={["Kotlin","Jetpack Compose","Firebase"]}
        duration="3000"
        />
      </a>
    </div>
  )
}

export default ProjectList