import OverviewContent from '../../components/organisms/OverviewContent'
import Sidebar from '../../components/organisms/Sidebar'

export default function Member() {
  return (
    <>
      {/* Overview */}
      <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" />
        <OverviewContent />
      </section>
    </>
  )
}
