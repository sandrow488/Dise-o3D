import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function useThreeGame(canvasRef) {
  let scene, camera, renderer, controls, ground

  const loader = new GLTFLoader()
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()

  function initThree() {
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x666666)

    const width = window.innerWidth
    const height = window.innerHeight

    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.set(0, 10, 15)

    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.value,
      antialias: true,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    //Paredes ;)
    const ParedMaterial = new THREE.MeshStandardMaterial({ color: 0x234325 })
    const paredGeo = new THREE.PlaneGeometry(20, 10)
    const pared_x = 5

    const pared1 = new THREE.Mesh(paredGeo, ParedMaterial)
    pared1.position.set(0, pared_x, -10)
    scene.add(pared1)

    const pared2 = new THREE.Mesh(paredGeo, ParedMaterial)
    pared2.rotation.y = Math.PI / 2
    pared2.position.set(-10, pared_x, 0)
    scene.add(pared2)

    const pared3 = new THREE.Mesh(paredGeo, ParedMaterial)
    pared3.rotation.y = -Math.PI / 2
    pared3.position.set(10, pared_x, 0)
    scene.add(pared3)

    const pared4 = new THREE.Mesh(paredGeo, ParedMaterial)
    pared4.rotation.y = Math.PI
    pared4.position.set(0, pared_x, 10)
    scene.add(pared4)

    //Suelito
    const groundGeo = new THREE.PlaneGeometry(20, 20)
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x444444, side: THREE.DoubleSide })
    ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    scene.add(ground)

    const light = new THREE.AmbientLight(0xffffff, 1.5)
    scene.add(light)

    const sunLight = new THREE.DirectionalLight(0xffffff, 0.8)
    sunLight.position.set(5, 10, 7)
    scene.add(sunLight)

    setupDropEvents()

    animate()
  }

  function setupDropEvents() {
    const canvas = renderer.domElement

    canvas.addEventListener('dragover', (e) => e.preventDefault())

    canvas.addEventListener('drop', (e) => {
      e.preventDefault()

      const ruta = e.dataTransfer.getData('rutaModelo')
      if (!ruta) return

      const rect = canvas.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObject(ground)

      if (intersects.length > 0) {
        const puntoEnSuelo = intersects[0].point
        cargarMueble(ruta, puntoEnSuelo)
      }
    })
  }

  function cargarMueble(ruta, posicion) {
    loader.load(
      ruta,
      (gltf) => {
        const modelo = gltf.scene
        modelo.position.copy(posicion)
        modelo.position.y = 0
        modelo.scale.set(4.5, 4.5, 4.5)

        scene.add(modelo)
        console.log('Mueble añadido con éxito!')
      },
      undefined,
      (error) => console.error('Error al cargar el mueble:', error),
    )
  }

  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }

  function start() {
    initThree()
  }

  return { start }
}
