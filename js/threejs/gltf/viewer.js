import {
  ACESFilmicToneMapping,
  AmbientLight,
  AnimationMixer,
  AxesHelper,
  Box3,
  Cache,
  Color,
  DirectionalLight,
  GridHelper,
  HemisphereLight,
  LinearToneMapping,
  LoaderUtils,
  LoadingManager,
  PMREMGenerator,
  PerspectiveCamera,
  PointsMaterial,
  REVISION,
  Scene,
  SkeletonHelper,
  Vector3,
  WebGLRenderer,
  MathUtils,
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js'
import Stats from 'three/addons/libs/stats.module.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js'
import { GUI } from 'dat.gui'
import { environments } from './environments.js'
const DEFAULT_CAMERA = '[default]',
  MANAGER = new LoadingManager(),
  THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`,
  DRACO_LOADER = new DRACOLoader(MANAGER).setTranscoderPath(
    `${THREE_PATH}/examples/jsm/libs/draco/gltf/`
  ),
  KTX2_LOADER = new KTX2Loader(MANAGER).setTranscoderPath(
    `${THREE_PATH}/examples/jsm/libs/basis/`
  ),
  IS_IOS = isIOS(),
  Preset = { ASSET_GENERATOR: 'assetgenerator' }
const isIOS = () =>
  [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
  ].includes(navigator.platform) ||
  (navigator.userAgent.includes('Mac') && 'ontouchend' in document)

Cache.enabled = true

export class Viewer {
  constructor(el, options) {
    this.el = el
    ;(this.options = options),
      (this.lights = []),
      (this.content = null),
      (this.mixer = null),
      (this.clips = [])
    this.gui = null
    this.state = {
      environment:
        options.preset === Preset.ASSET_GENERATOR
          ? environments.find((e) => e.id === 'footprint-court')
          : environments[1].name,
      background: false,
      playbackSpeed: 1.0,
      actionStates: {},
      camera: DEFAULT_CAMERA,
      wireframe: false,
      skeleton: true,
      grid: false,
      autoRotate: false,
      // lights
      punctualLights: true,
      exposure: 0.0,
      toneMapping: LinearToneMapping,
      ambientIntensity: 0.3,
      ambientColor: '#ffffff',
      directIntensity: 0.8 * Math.PI,
      directColor: '#ffffff',
      bgColor: '#191919',

      pointSize: 1,
    }
    ;(this.prevTime = 0),
      (this.stats = new Stats()),
      (this.stats.dom.height = '48px')
    ;[].forEach.call(
      this.stats.dom.children,
      (child) => (child.style.display = '')
    )
    ;(this.backgroundColor = new Color(this.state.bgColor)),
      (this.scene = new Scene()),
      (this.scene.background = this.backgroundColor)

    const fov =
        options.preset === Preset.ASSET_GENERATOR ? (0.8 * 100) / Math.PI : 60,
      aspect = el.clientWidth / el.clientHeight
    ;(this.defaultCamera = new PerspectiveCamera(fov, aspect, 0.01, 1000)),
      (this.activeCamera = this.defaultCamera)
    this.scene.add(this.defaultCamera)

    this.renderer = window.renderer = new WebGLRenderer({ antialias: true })
    this.renderer.setClearColor(0xcccccc),
      this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(el.clientWidth, el.clientHeight)
    ;(this.PMREMGenerator = new PMREMGenerator(this.renderer)),
      this.PMREMGenerator.compileEquirectangularShader()

    this.neutralEnvironment = this.PMREMGenerator.fromScene(
      new RoomEnvironment()
    ).texture

    this.controls = new OrbitControls(
      this.defaultCamera,
      this.renderer.domElement
    )
    this.controls.screenSpacePanning = true
    this.el.appendChild(this.renderer.domElement)
    ;(this.cameraCtrl = null),
      (this.cameraFolder = null),
      (this.animFolder = null),
      this.animCtrls - [],
      this.morphFolder - null,
      (this.morphCtrls = [])
    ;(this.skeletonHelpers = []),
      (this.gridHelper = null),
      (this.axesHelper = null)

    this.addAxesHelper()
    this.addGUI()
    if (options.kiosk) this.gui.close()

    this.animate = this.animate.bind(this)
    requestAnimationFrame(this.animate)
    window.addEventListener('resize', this.resize.bind(this), false)
  }
  animate(time) {
    requestAnimationFrame(this.animate)
    const dt = (time - this.prevTime) / 1000
    this.controls.update()
    this.stats.update()
    this.mixer?.update(dt)
    this.render()
    this.prevTime = time
  }
  render() {
    this.renderer.render(this.scene, this.activeCamera)
    if (!this.state.grid) return
    this.axesCamera.position.copy(this.defaultCamera.position)
    this.axesCamera.lookAt(this.axesScene.position)
    this.axesRenderer.render(this.axesScene, this.axesCamera)
  }
  resize() {
    let { clientHeight, clientWidth } = this.el
    this.defaultCamera.aspect = clientWidth / clientHeight
    this.defaultCamera.updateProjectionMatrix()
    this.renderer.setSize(clientWidth, clientHeight)
    this.axesCamera.aspect =
      this.axesDiv.clientWidth / this.axesDiv.clientHeight
    this.axesCamera.updateProjectionMatrix()
    this.axesRenderer.setSize(
      this.axesDiv.clientWidth,
      this.axesDiv.clientHeight
    )
  }
  load(url, rootPath, assetMap) {
    const baseURL = LoaderUtils.extractUrlBase(url)
    //Load
    return new Promise((resolve, reject) => {
      MANAGER.setURLModifier((url, path) => {
        const normalizedURL =
          rootPath +
          decodeURI(url)
            .replace(baseURL, '')
            .replace(/^(\.?\/)/, '')
        if (assetMap.has?.(normalizedURL)) {
          const blob = assetMap.get(normalizedURL)
          const blobURL = URL.createObjectURL(blob)
          blobURLs.push(blobURL)
          return blobURL
        }
        return (path || '') + url
      })
      const loader = new GLTFLoader(MANAGER)
        .setCrossOrigin('anonymous')
        .setDRACOLoader(DRACO_LOADER)
        .setKTX2Loader(KTX2_LOADER.detectSupport(this.renderer))
        .setMeshoptDecoder(MeshoptDecoder)
      const blobURLs = []
      loader.load(
        url,
        (gltf) => {
          window.VIEWER.json = gltf
          const scene = gltf.scene || gltf.scenes[0]
          const clips = gltf.animations || []
          if (!scene)
            throw new Error(`This model contains no scene, and cannot be viewed here. However, it may contain
        individual 3D resources.`)
          this.setContent(scene, clips)
          blobURLs.forEach(URL.revokeObjectURL)
          resolve(gltf)
        },
        undefined,
        reject
      )
    })
  }

  /**
   * @params {THREE.Object3D} object
   * @params {Array<THREE.AnimationClip} clips
   */
  setContent(object, clips) {
    this.clear()
    object.updateMatrixWorld()
    const box=new Box3().setFromObject(object),size=box.getSize(new Vector3()).length,center=box.getCenter(new Vector3())
    this.controls.reset()
    object.position.x-=center.x
    object.position.y-=center.y
    object.position.z -= center.z

    this.controls.maxDistance=size*10

    this.defaultCamera.near=size/100
    this.defaultCamera.far = size * 100
    this.defaultCamera.updateProjectionMatrix()

    if(this.options.cameraPosition){
      this.defaultCamera.position.fromArray(this.options.cameraPosition)
    }
  }
}
