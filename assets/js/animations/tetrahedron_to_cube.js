var CANVAS_WIDTH = 300;
var CANVAS_HEIGHT = 300;
var camera, scene, renderer;
var geometry, material, mesh;
var dual
var mesh2
var i1,i2,i3,i4
var d1,d2,d3,d4

var t
init();
animate();

function init() {
 t=0
 t=0

   scene = new THREE.Scene();
 camera = new THREE.PerspectiveCamera(45, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 100);
camera.position.x = 17*2;
camera.position.y = 12*2;
camera.position.z = 13*2;
camera.lookAt(scene.position);

	scene = new THREE.Scene();


  geometry = new THREE.Geometry();
  geometry.verticesNeedUpdate = true;
  geometry.vertices.push( new THREE.Vector3( 10, 10, 10 ) );
  geometry.vertices.push( new THREE.Vector3( 10, -10, -10 ) );
  geometry.vertices.push( new THREE.Vector3( -10, 10, -10 ) );
  geometry.vertices.push( new THREE.Vector3( -10, -10, 10 ) );
  i1= new THREE.Vector3( 10/3, 10/3, -10/3 )
  geometry.vertices.push(i1);
  i2=new THREE.Vector3( -10/3, 10/3, 10/3 )
  geometry.vertices.push( i2);
  i3=new THREE.Vector3( 10/3, -10/3, 10/3 )
  geometry.vertices.push( i3);
  i4=new THREE.Vector3( -10/3, -10/3, -10/3 )
  geometry.vertices.push( i4);


      var face = new THREE.Face3(0, 1, 4);
      geometry.faces.push(face);
      var face = new THREE.Face3(1, 2, 4);
      geometry.faces.push(face);
      var face = new THREE.Face3(2, 0, 4);
      geometry.faces.push(face);
      var face = new THREE.Face3(5, 3, 0);
      geometry.faces.push(face);
      var face = new THREE.Face3(0, 2, 5);
      geometry.faces.push(face);
      var face = new THREE.Face3(3, 5, 2);
      geometry.faces.push(face);
      var face = new THREE.Face3(0, 6, 1);
      geometry.faces.push(face);
      var face = new THREE.Face3(1, 6, 3);
      geometry.faces.push(face);
      var face = new THREE.Face3(0, 3, 6);
      geometry.faces.push(face);
      var face = new THREE.Face3(1, 3, 7);
      geometry.faces.push(face);
      var face = new THREE.Face3(2, 7, 3);
      geometry.faces.push(face);
      var face = new THREE.Face3(1, 7, 2);
      geometry.faces.push(face);
      var mat = new THREE.MeshNormalMaterial({ flatShading: true })

      mesh = new THREE.Mesh(geometry, mat);

      // lights
      //   args: color, intensity, range (0 if limitless)
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      scene.add(mesh);

      dual = new THREE.Geometry();
      d1 = new THREE.Vector3( -10, -10, -10  );
      d2 = new THREE.Vector3( -10, 10, 10 );
      d3 = new THREE.Vector3( 10, -10, 10  );
      d4 = new THREE.Vector3( 10, 10, -10  );



renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

}


var dir=0
function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

  if(t<0)
  dir = 0
  if(t>1)
    dir=1
  if(dir==0){
    t+=0.00001
    aux = map(t,i1,d4)
    geometry.vertices[4].set(aux.x,aux.y,aux.z)
    aux = map(t,i2,d2)
    geometry.vertices[5].set(aux.x,aux.y,aux.z)
    aux = map(t,i3,d3)
    geometry.vertices[6].set(aux.x,aux.y,aux.z)
    aux = map(t,i4,d1)
    geometry.vertices[7].set(aux.x,aux.y,aux.z)
  }/*else {
    t-=0.01
    aux = map(t,d4,i1)
    geometry.vertices[4].set(aux.x,aux.y,aux.z)
    aux = map(t,d2,i2)
    geometry.vertices[5].set(aux.x,aux.y,aux.z)
    aux = map(t,d3,i3)
    geometry.vertices[6].set(aux.x,aux.y,aux.z)
    aux = map(t,d1,i4)
    geometry.vertices[7].set(aux.x,aux.y,aux.z)
  }*/
	renderer.render( scene, camera );
  geometry.verticesNeedUpdate = true;
}

function map(x,a,b,){
  return a.clone().lerp(b.clone(),x)
}
