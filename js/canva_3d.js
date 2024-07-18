import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const canvas = document.querySelector(".canvas")


const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();
