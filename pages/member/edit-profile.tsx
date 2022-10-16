import Input from '../../components/atoms/Input'
import Sidebar from '../../components/organisms/Sidebar'

export default function EditProfile() {
  return (
    <>
      <section class="edit-profile overflow-auto">
        <Sidebar activeMenu="settings" />
        <main class="main-wrapper">
          <div class="ps-lg-0">
            <h2 class="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div class="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div class="photo d-flex">
                  <div class="position-relative me-20">
                    <img
                      src="/img/avatar-1.png"
                      width="90"
                      height="90"
                      class="avatar img-fluid"
                    />
                    <div class="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <img src="/icon/upload.svg" alt="icon upload" />
                    </div>
                  </div>
                  <div class="image-upload">
                    <label for="avatar">
                      <img
                        src="/icon/upload.svg"
                        alt="icon upload"
                        width={90}
                        height={90}
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
                <div class="pt-30">
                  <Input label="Full Name" />
                </div>
                <div class="pt-30">
                  <Input label="Email Address" />
                </div>
                <div class="pt-30">
                  <Input label="Phone" />
                </div>
                <div class="button-group d-flex flex-column pt-50">
                  <button
                    type="submit"
                    class="btn btn-save fw-medium text-lg text-white rounded-pill"
                    role="button"
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}
