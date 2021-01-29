const renderer = new THREE.WebGLRenderer();
//``
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);



const scanData = [
    [20, 120, 50, 202, 207, 30, 206, 215, 209, 60],
    [50, 150, 160, 212, 214, 211, 214, 212, 210, 215],
    [30, 180, 150, 251, 190, 210, 206, 48, 213, 200],
    [214, 212, 220, 205, 203, 205, 208, 216, 215, 211],
    [80, 207, 211, 209, 213, 60, 70, 219, 214, 180],
    [211, 199, 201, 70, 55, 50, 52, 213, 216, 210],
    [180, 214, 195, 80, 50, 20, 48, 210, 209, 195],
    [211, 203, 90, 84, 14, 15, 45, 213, 208, 214],
    [170, 203, 85, 90, 40, 40, 45, 205, 208, 200],
    [207, 207, 90, 95, 90, 89, 190, 210, 215, 210],
    [211, 199, 201, 197, 30, 164, 185, 190, 216, 210],
    [190, 214, 195, 193, 218, 205, 198, 210, 209, 198],
    [211, 203, 211, 205, 194, 40, 200, 213, 208, 214],
    [180, 203, 203, 210, 209, 207, 215, 205, 208, 200],
    [207, 207, 211, 205, 206, 209, 212, 210, 215, 210],



    
]
const geometry = new THREE.PlaneGeometry(4, 4, scanData[0].length -1, scanData.length-1);
//const mesh = new THREE.Mesh(box, new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors }));
const material = new THREE.MeshBasicMaterial({color:0xffffff, vertexColors: true ,wireframe:false});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

let sutun = 0
let satir = 0
for (let i = 0; i < geometry.faces.length - 1; i = i + 2) {
    console.log(i)
  satir = Math.trunc(i / ((scanData[0].length - 1) * 2))
  sutun = Math.trunc((i % ((scanData[0].length - 1) * 2)) / 2)
 
  // i. face
  let face = geometry.faces[i]
  face.vertexColors[0] = new THREE.Color(`hsl(${scanData[satir][sutun]}, 100%, 50%)`)
  face.vertexColors[2] = new THREE.Color(`hsl(${scanData[satir][sutun + 1]}, 100%, 50%)`)
  face.vertexColors[1] = new THREE.Color(`hsl(${scanData[satir + 1][sutun]}, 100%, 50%)`)
  // i+1 face
  face = geometry.faces[i + 1]
  face.vertexColors[0] = new THREE.Color(`hsl(${scanData[satir + 1][sutun]}, 100%, 50%)`)
  face.vertexColors[1] = new THREE.Color(`hsl(${scanData[satir + 1][sutun + 1]}, 100%, 50%)`)
  face.vertexColors[2] = new THREE.Color(`hsl(${scanData[(satir)][sutun + 1]}, 100%, 50%)`)
}


camera.position.z = 5

function animate() {

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


