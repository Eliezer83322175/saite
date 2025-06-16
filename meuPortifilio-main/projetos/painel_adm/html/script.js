document.addEventListener("DOMContentLoaded", () => {
  // Dados de exemplo - substitua pelos seus veículos, itens e locais reais
  const vehicles = [
    { name: "volatus", image: "./img/volatus.png", label: "Volatus" },
    { name: "bf400", image: "./img/bf400.png", label: "BF400" },
    { name: "t20", image: "./img/t20.png", label: "T20" },
    { name: "zentorno", image: "./img/zentorno.png", label: "Zentorno" },
    { name: "kuruma", image: "./img/kuruma2.png", label: "Kuruma" },
    { name: "adder", image: "./img/adder.png", label: "Adder" },
    { name: "volatus", image: "./img/volatus.png", label: "Volatus" },
    { name: "bf400", image: "./img/bf400.png", label: "BF400" },
    { name: "t20", image: "./img/t20.png", label: "T20" },
    { name: "zentorno", image: "./img/zentorno.png", label: "Zentorno" },
    { name: "kuruma", image: "./img/kuruma2.png", label: "Kuruma" },
    { name: "adder", image: "./img/adder.png", label: "Adder" },
    { name: "volatus", image: "./img/volatus.png", label: "Volatus" },
    { name: "bf400", image: "./img/bf400.png", label: "BF400" },
    { name: "t20", image: "./img/t20.png", label: "T20" },
    { name: "zentorno", image: "./img/zentorno.png", label: "Zentorno" },
    { name: "kuruma", image: "./img/kuruma2.png", label: "Kuruma" },
    { name: "adder", image: "./img/adder.png", label: "Adder" },
    { name: "volatus", image: "./img/volatus.png", label: "Volatus" },
    { name: "bf400", image: "./img/bf400.png", label: "BF400" },
    { name: "t20", image: "./img/t20.png", label: "T20" },
    { name: "zentorno", image: "./img/zentorno.png", label: "Zentorno" },
    { name: "kuruma", image: "./img/kuruma2.png", label: "Kuruma" },
    { name: "adder", image: "./img/adder.png", label: "Adder" },
    { name: "volatus", image: "./img/volatus.png", label: "Volatus" },
    { name: "bf400", image: "./img/bf400.png", label: "BF400" },
    { name: "t20", image: "./img/t20.png", label: "T20" },
    { name: "zentorno", image: "./img/zentorno.png", label: "Zentorno" },
    { name: "kuruma", image: "./img/kuruma2.png", label: "Kuruma" },
    { name: "adder", image: "./img/adder.png", label: "Adder" },
    { name: "volatus", image: "./img/volatus.png", label: "Volatus" },
    { name: "bf400", image: "./img/bf400.png", label: "BF400" },
    { name: "t20", image: "./img/t20.png", label: "T20" },
    { name: "zentorno", image: "./img/zentorno.png", label: "Zentorno" },
    { name: "kuruma", image: "./img/kuruma2.png", label: "Kuruma" },
    { name: "adder", image: "./img/adder.png", label: "Adder" },
    { name: "volatus", image: "./img/volatus.png", label: "Volatus" },
    { name: "bf400", image: "./img/bf400.png", label: "BF400" },
    { name: "t20", image: "./img/t20.png", label: "T20" },
    { name: "zentorno", image: "./img/zentorno.png", label: "Zentorno" },
    { name: "kuruma", image: "./img/kuruma2.png", label: "Kuruma" },
    { name: "adder", image: "./img/adder.png", label: "Adder" },
    { name: "volatus", image: "./img/volatus.png", label: "Volatus" },
    { name: "bf400", image: "./img/bf400.png", label: "BF400" },
    { name: "t20", image: "./img/t20.png", label: "T20" },
    { name: "zentorno", image: "./img/zentorno.png", label: "Zentorno" },
    { name: "kuruma", image: "./img/kuruma2.png", label: "Kuruma" },
    { name: "adder", image: "./img/adder.png", label: "Adder" },
    { name: "volatus", image: "./img/volatus.png", label: "Volatus" },
    { name: "bf400", image: "./img/bf400.png", label: "BF400" },
    { name: "t20", image: "./img/t20.png", label: "T20" },
    { name: "zentorno", image: "./img/zentorno.png", label: "Zentorno" },
    { name: "kuruma", image: "./img/kuruma2.png", label: "Kuruma" },
    { name: "adder", image: "./img/adder.png", label: "Adder" },
    { name: "volatus", image: "./img/volatus.png", label: "Volatus" },
    { name: "bf400", image: "./img/bf400.png", label: "BF400" },
    { name: "t20", image: "./img/t20.png", label: "T20" },
    { name: "zentorno", image: "./img/zentorno.png", label: "Zentorno" },
    { name: "kuruma", image: "./img/kuruma2.png", label: "Kuruma" },
    { name: "adder", image: "./img/adder.png", label: "Adder" },
    { name: "volatus", image: "./img/volatus.png", label: "Volatus" },
    { name: "bf400", image: "./img/bf400.png", label: "BF400" },
    { name: "t20", image: "./img/t20.png", label: "T20" },
    { name: "zentorno", image: "./img/zentorno.png", label: "Zentorno" },
    { name: "kuruma", image: "./img/kuruma2.png", label: "Kuruma" },
    { name: "adder", image: "./img/adder.png", label: "Adder" },
  ]

  const items = [
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
    { id: "algemas", name: "Algema", image: "./img/algemas.png", label: "Algema" },
    { id: "celular", name: "Celular", image: "./img/celular.png", label: "Celular" },
    { id: "vest", name: "colete", image: "./img/colete.png", label: "Colete Balístico" },
    { id: "mpx", name: "mpx", image: "./img/mpx.png", label: "M4A1" },
    { id: "money", name: "dinheiro", image: "./img/money.png", label: "Dinheiro" },
    { id: "bandagem", name: "bandagem", image: "./img/bandagem.png", label: "Bandagem" },
    { id: "radio", name: "Radio", image: "./img/radio.png", label: "Radio" },
    { id: "backpack", name: "mochila", image: "./img/mochila.png", label: "Mochila" },
  ]

  const locations = [
    {
      id: "hospital",
      name: "hospital",
      label: "Hospital Central",
      coords: { x: 298.6, y: -584.4, z: 43.3 },
      category: "Público",
    },
    {
      id: "police",
      name: "delegacia",
      label: "Delegacia LSPD",
      coords: { x: 425.1, y: -979.5, z: 30.7 },
      category: "Público",
    },
    {
      id: "garage",
      name: "garagem",
      label: "Garagem Central",
      coords: { x: 215.8, y: -810.0, z: 30.7 },
      category: "Público",
    },
    {
      id: "bank",
      name: "banco",
      label: "Banco Fleeca",
      coords: { x: 150.2, y: -1040.2, z: 29.4 },
      category: "Público",
    },
    {
      id: "airport",
      name: "aeroporto",
      label: "Aeroporto LS",
      coords: { x: -1037.8, y: -2737.6, z: 20.2 },
      category: "Público",
    },
    {
      id: "prison",
      name: "prisao",
      label: "Prisão Bolingbroke",
      coords: { x: 1845.2, y: 2585.9, z: 46.0 },
      category: "Governo",
    },
    {
      id: "military",
      name: "base_militar",
      label: "Base Militar",
      coords: { x: -2360.0, y: 3249.5, z: 32.8 },
      category: "Governo",
    },
    {
      id: "casino",
      name: "cassino",
      label: "Diamond Casino",
      coords: { x: 925.3, y: 46.5, z: 81.1 },
      category: "Entretenimento",
    },
    {
      id: "beach",
      name: "praia",
      label: "Praia de Vespucci",
      coords: { x: -1223.9, y: -1491.8, z: 4.0 },
      category: "Entretenimento",
    },
    {
      id: "mount",
      name: "monte_chiliad",
      label: "Monte Chiliad",
      coords: { x: 501.8, y: 5604.1, z: 797.9 },
      category: "Entretenimento",
    },
  ]

  // Elementos DOM
  const vehicleList = document.getElementById("vehicle-list")
  const itemList = document.getElementById("item-list")
  const locationList = document.getElementById("location-list")
  const btnVehicles = document.getElementById("btn-vehicles")
  const btnItems = document.getElementById("btn-items")
  const btnLocations = document.getElementById("btn-locations")
  const vehiclesContent = document.getElementById("vehicles-content")
  const itemsContent = document.getElementById("items-content")
  const locationsContent = document.getElementById("locations-content")
  const playerIdInput = document.getElementById("player-id")
  const searchPlayerBtn = document.getElementById("search-player")
  const itemSearchInput = document.getElementById("item-search")
  const vehicleSearchInput = document.getElementById("vehicle-search")
  const locationSearchInput = document.getElementById("location-search")
  const giveItemBtn = document.getElementById("give-item-btn")
  const itemAmountInput = document.getElementById("item-amount")
  const increaseAmountBtn = document.getElementById("increase-amount")
  const decreaseAmountBtn = document.getElementById("decrease-amount")
  const playerInfoDiv = document.getElementById("player-info")
  const playerName = document.getElementById("player-name")
  const playerIdDisplay = document.getElementById("player-id-display")
  const playerGroup = document.getElementById("player-group")
  const playerInventory = document.getElementById("player-inventory")
  const themeToggleBtn = document.getElementById("theme-toggle")
  const notificationsContainer = document.getElementById("notifications-container")

  // Variáveis de estado
  let selectedItem = null
  let selectedPlayer = null
  let isDarkTheme = true
  let activeTab = "items"

  // Inicialização
  init()

  function init() {
    setupEventListeners()
    loadInitialData()
    loadThemePreference()
    switchToTab("items") // Começa na aba de itens por padrão
  }

  async function loadInitialData() {
    try {
      // Carrega dados do servidor se necessário
      const response = await fetch(`https://painel_adm/loadData`)
      const data = await handleApiResponse(response)

      if (data.vehicles) {
        vehicles.push(...data.vehicles)
      }
      if (data.items) {
        items.push(...data.items)
      }
      if (data.locations) {
        locations.push(...data.locations)
      }
    } catch (error) {
      console.error("Erro ao carregar dados:", error)
    }
  }

  function setupEventListeners() {
    // Navegação entre abas
    btnVehicles.addEventListener("click", () => switchToTab("vehicles"))
    btnItems.addEventListener("click", () => switchToTab("items"))
    btnLocations.addEventListener("click", () => switchToTab("locations"))

    // Pesquisa de itens, veículos e locais
    itemSearchInput.addEventListener("input", renderItems)
    vehicleSearchInput?.addEventListener("input", renderVehicles)
    locationSearchInput?.addEventListener("input", renderLocations)

    // Botão para dar item
    giveItemBtn.addEventListener("click", giveItemToPlayer)

    // Botões de quantidade
    increaseAmountBtn.addEventListener("click", () => {
      itemAmountInput.value = Math.min(Number.parseInt(itemAmountInput.value) + 1, 1000)
    })

    decreaseAmountBtn.addEventListener("click", () => {
      itemAmountInput.value = Math.max(Number.parseInt(itemAmountInput.value) - 1, 1)
    })

    // Tecla Enter no campo de ID do player
    playerIdInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchPlayer()
      }
    })

    // Botão de buscar player
    searchPlayerBtn.addEventListener("click", searchPlayer)

    // Alternar tema
    themeToggleBtn.addEventListener("click", toggleTheme)
  }

  // Funções de navegação
  function switchToTab(tab) {
    // Remove active de todas as abas
    document.querySelectorAll(".nav-tab").forEach((btn) => btn.classList.remove("active"))
    document.querySelectorAll(".tab-content").forEach((content) => content.classList.add("hidden"))

    // Ativa a aba selecionada
    document.getElementById(`btn-${tab}`).classList.add("active")
    document.getElementById(`${tab}-content`).classList.remove("hidden")

    activeTab = tab

    // Renderiza o conteúdo da aba
    switch (tab) {
      case "vehicles":
        renderVehicles()
        break
      case "items":
        renderItems()
        break
      case "locations":
        renderLocations()
        break
    }
  }

  // Renderização dos veículos
  function renderVehicles() {
    vehicleList.innerHTML = ""

    const searchTerm = vehicleSearchInput ? vehicleSearchInput.value.toLowerCase() : ""

    const filteredVehicles = vehicles.filter(
      (vehicle) =>
        vehicle.name.toLowerCase().includes(searchTerm) ||
        (vehicle.label && vehicle.label.toLowerCase().includes(searchTerm)),
    )

    if (filteredVehicles.length === 0) {
      vehicleList.innerHTML = '<p class="no-items">Nenhum veículo encontrado</p>'
      return
    }

    filteredVehicles.forEach((vehicle) => {
      const card = createVehicleCard(vehicle)
      vehicleList.appendChild(card)
    })
  }

  function createVehicleCard(vehicle) {
    const card = document.createElement("div")
    card.className = "vehicle-card"
    card.innerHTML = `
      <img src="${vehicle.image}" alt="${vehicle.label || vehicle.name}" 
           onerror="this.onerror=null;this.src='/placeholder.svg?height=100&width=160';">
      <span>${vehicle.label || vehicle.name}</span>
    `

    card.addEventListener("click", async () => {
      try {
        showNotification({
          title: "Spawning Vehicle",
          message: `Tentando spawnar ${vehicle.label || vehicle.name}...`,
          type: "info",
        })

        await fecharPainel()
        const response = await fetch(`https://painel_adm/spawnVehicle`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            vehicleName: vehicle.name,
            vehicleModel: vehicle.model || vehicle.name,
          }),
        })

        const result = await handleApiResponse(response)
        if (!result.success) {
          showNotification({
            title: "Erro",
            message: `Falha ao spawnar veículo: ${result.error || "Erro desconhecido"}`,
            type: "error",
          })
        }
      } catch (err) {
        console.error("Erro ao spawnar veículo:", err)
        showNotification({
          title: "Erro",
          message: "Erro ao spawnar veículo",
          type: "error",
        })
      }
    })

    return card
  }

  // Renderização dos itens
  function renderItems() {
    itemList.innerHTML = ""
    const searchTerm = itemSearchInput.value.toLowerCase()

    const filteredItems = items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        (item.label && item.label.toLowerCase().includes(searchTerm)) ||
        (item.id && item.id.toLowerCase().includes(searchTerm)),
    )

    if (filteredItems.length === 0) {
      itemList.innerHTML = '<p class="no-items">Nenhum item encontrado</p>'
      giveItemBtn.disabled = true
      return
    }

    filteredItems.forEach((item) => {
      const card = createItemCard(item)
      itemList.appendChild(card)
    })
  }

  function createItemCard(item) {
    const card = document.createElement("div")
    card.className = "item-card"
    if (selectedItem && selectedItem.id === item.id) {
      card.classList.add("selected")
    }

    card.innerHTML = `
      <img src="${item.image}" alt="${item.label || item.name}" 
           onerror="this.onerror=null;this.src='';">
      <span>${item.label || item.name}</span>
    `

    card.addEventListener("click", () => {
      // Remove seleção anterior
      document.querySelectorAll(".item-card").forEach((c) => c.classList.remove("selected"))

      // Seleciona o novo item
      card.classList.add("selected")
      selectedItem = item

      // Habilita o botão se um player estiver selecionado
      giveItemBtn.disabled = !selectedPlayer
    })

    return card
  }

  // Renderização dos locais
  function renderLocations() {
    locationList.innerHTML = ""
    const searchTerm = locationSearchInput ? locationSearchInput.value.toLowerCase() : ""

    const filteredLocations = locations.filter(
      (location) =>
        location.name.toLowerCase().includes(searchTerm) ||
        location.label.toLowerCase().includes(searchTerm) ||
        location.category.toLowerCase().includes(searchTerm),
    )

    if (filteredLocations.length === 0) {
      locationList.innerHTML = '<p class="no-items">Nenhum local encontrado</p>'
      return
    }

    // Agrupa locais por categoria
    const locationsByCategory = filteredLocations.reduce((acc, location) => {
      if (!acc[location.category]) {
        acc[location.category] = []
      }
      acc[location.category].push(location)
      return acc
    }, {})

    // Renderiza cada categoria
    Object.entries(locationsByCategory).forEach(([category, categoryLocations]) => {
      const categoryDiv = document.createElement("div")
      categoryDiv.className = "location-category"

      categoryDiv.innerHTML = `
        <h3 class="category-title">${category}</h3>
        <div class="category-locations" id="category-${category.replace(/\s+/g, "-").toLowerCase()}"></div>
      `

      locationList.appendChild(categoryDiv)

      const categoryContainer = categoryDiv.querySelector(".category-locations")

      categoryLocations.forEach((location) => {
        const card = createLocationCard(location)
        categoryContainer.appendChild(card)
      })
    })
  }

  function createLocationCard(location) {
    const card = document.createElement("div")
    card.className = "location-card"
    card.innerHTML = `
      <div class="location-icon">
        <i class="fas fa-map-marker-alt"></i>
      </div>
      <div class="location-info">
        <h4>${location.label}</h4>
        <p class="location-coords">
          X: ${location.coords.x.toFixed(1)} | Y: ${location.coords.y.toFixed(1)} | Z: ${location.coords.z.toFixed(1)}
        </p>
      </div>
    `

    card.addEventListener("click", async () => {
      try {
        showNotification({
          title: "Teleporte",
          message: `Teleportando para ${location.label}...`,
          type: "info",
        })

        console.log("ta chegando no js");
        const response = await fetch(`https://painel_adm/teleportToLocation`, {
          
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            locationId: location.id,
            locationName: location.name,
            coords: location.coords,
          }),
        })

        const result = await handleApiResponse(response)
        if (result.success) {
          showNotification({
            title: "Sucesso",
            message: `Teleportado para ${location.label}!`,
            type: "success",
          });
          fecharPainel();
        } else {
          showNotification({
            title: "Erro",
            message: `Falha ao teleportar: ${result.error || "Erro desconhecido"}`,
            type: "error",
          })
        }
      } catch (err) {
        console.error("Erro ao teleportar:", err)
        showNotification({
          title: "Erro",
          message: "Erro ao teleportar",
          type: "error",
        })
      }
    })

    return card
  }

  // Buscar informações do player
  async function searchPlayer() {
    const identifier = playerIdInput.value.trim()

    if (!identifier) {
      showNotification({
        title: "Aviso",
        message: "Por favor, insira o ID ou nome do player",
        type: "warning",
      })
      return
    }

    try {
      // Mostra estado de carregamento
      searchPlayerBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'
      searchPlayerBtn.disabled = true

      // Simula delay de API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Dados de teste baseados no ID/nome inserido
      const mockPlayers = {
        1: {
          id: "1",
          name: "João Silva",
          group: "Admin",
          inventory: [
            { name: "money", amount: 50000 },
            { name: "phone", amount: 1 },
            { name: "radio", amount: 1 },
            { name: "medkit", amount: 3 },
          ],
          bank: 250000,
          job: "Policial",
          level: 45,
          playtime: "127h 32m",
          lastLogin: "Agora",
          status: "Online",
        },
        2: {
          id: "2",
          name: "Maria Santos",
          group: "Moderador",
          inventory: [
            { name: "money", amount: 25000 },
            { name: "backpack", amount: 1 },
            { name: "water", amount: 5 },
            { name: "bread", amount: 8 },
          ],
          bank: 180000,
          job: "Médica",
          level: 32,
          playtime: "89h 15m",
          lastLogin: "5 min atrás",
          status: "Online",
        },
        3: {
          id: "3",
          name: "Carlos Mendes",
          group: "VIP",
          inventory: [
            { name: "money", amount: 15000 },
            { name: "pistol", amount: 1 },
            { name: "vest", amount: 1 },
            { name: "lockpick", amount: 2 },
          ],
          bank: 95000,
          job: "Mecânico",
          level: 28,
          playtime: "67h 48m",
          lastLogin: "2h atrás",
          status: "Offline",
        },
      }

      // Busca por ID exato ou nome parcial
      let foundPlayer = mockPlayers[identifier]

      if (!foundPlayer) {
        // Busca por nome parcial
        const playerEntries = Object.entries(mockPlayers)
        const nameMatch = playerEntries.find(([id, player]) =>
          player.name.toLowerCase().includes(identifier.toLowerCase()),
        )
        if (nameMatch) {
          foundPlayer = nameMatch[1]
        }
      }

      // Se não encontrou, cria um player genérico
      if (!foundPlayer) {
        foundPlayer = {
          id: identifier,
          name: `Player ${identifier}`,
          group: "Usuário",
          inventory: [
            { name: "money", amount: Math.floor(Math.random() * 10000) + 1000 },
            { name: "phone", amount: 1 },
            { name: "water", amount: Math.floor(Math.random() * 5) + 1 },
          ],
          bank: Math.floor(Math.random() * 50000) + 10000,
          job: ["Desempregado", "Taxista", "Vendedor", "Entregador"][Math.floor(Math.random() * 4)],
          level: Math.floor(Math.random() * 30) + 1,
          playtime: `${Math.floor(Math.random() * 100)}h ${Math.floor(Math.random() * 60)}m`,
          lastLogin: ["Agora", "5 min atrás", "1h atrás", "1 dia atrás"][Math.floor(Math.random() * 4)],
          status: Math.random() > 0.3 ? "Online" : "Offline",
        }
      }

      // Restaura o botão
      searchPlayerBtn.innerHTML = '<i class="fas fa-search"></i> Buscar'
      searchPlayerBtn.disabled = false

      selectedPlayer = foundPlayer
      showPlayerInfo(foundPlayer)
      showNotification({
        title: "Sucesso",
        message: `Player ${foundPlayer.name} encontrado!`,
        type: "success",
      })

      // Habilita o botão se um item estiver selecionado
      giveItemBtn.disabled = !selectedItem
    } catch (err) {
      console.error("Erro ao buscar player:", err)
      searchPlayerBtn.innerHTML = '<i class="fas fa-search"></i> Buscar'
      searchPlayerBtn.disabled = false
      showNotification({
        title: "Erro",
        message: "Erro ao buscar informações do player",
        type: "error",
      })
    }
  }

  function showPlayerInfo(player) {
    playerName.textContent = player.name || "N/A"
    playerIdDisplay.textContent = player.id || "0"
    playerGroup.textContent = player.group || "N/A"
    playerInventory.textContent = player.inventory ? `${player.inventory.length} itens` : "N/A"

    // Atualiza as informações extras se existirem
    const bankElement = document.getElementById("player-bank")
    if (bankElement && player.bank) {
      bankElement.textContent = `$${player.bank.toLocaleString()}`
    }

    const jobElement = document.getElementById("player-job")
    if (jobElement && player.job) {
      jobElement.textContent = player.job
    }

    const levelElement = document.getElementById("player-level")
    if (levelElement && player.level) {
      levelElement.textContent = player.level
    }

    const statusElement = document.getElementById("player-status")
    const statusIndicator = document.getElementById("player-status-indicator")
    if (statusElement && player.status) {
      statusElement.textContent = player.status
      statusElement.className = `status-badge ${player.status.toLowerCase()}`

      if (statusIndicator) {
        statusIndicator.className = `status-indicator ${player.status.toLowerCase()}`
      }
    }

    playerInfoDiv.classList.remove("hidden")
  }

  // Função para dar item ao jogador
  async function giveItemToPlayer() {
    if (!selectedPlayer) {
      showNotification({
        title: "Aviso",
        message: "Por favor, selecione um player primeiro",
        type: "warning",
      })
      return
    }

    if (!selectedItem) {
      showNotification({
        title: "Aviso",
        message: "Por favor, selecione um item",
        type: "warning",
      })
      return
    }

    const amount = Number.parseInt(itemAmountInput.value) || 1
    if (amount <= 0) {
      showNotification({
        title: "Erro",
        message: "Quantidade inválida",
        type: "error",
      })
      return
    }

    try {
      // Mostra estado de carregamento
      giveItemBtn.disabled = true
      giveItemBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'

      const response = await fetch(`https://painel_adm/giveItem`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playerId: selectedPlayer.id,
          itemName: selectedItem.name,
          itemId: selectedItem.id,
          amount: amount,
        }),
      })

      const result = await handleApiResponse(response)

      // Restaura o botão
      giveItemBtn.disabled = false
      giveItemBtn.innerHTML = '<i class="fas fa-gift"></i> Dar Item'

      if (result.success) {
        showNotification({
          title: "Sucesso",
          message: `Item "${selectedItem.label || selectedItem.name}" (x${amount}) dado com sucesso para ${selectedPlayer.name}!`,
          type: "success",
        })

        // Atualiza o inventário mostrado se necessário
        if (selectedPlayer.inventory) {
          selectedPlayer.inventory.push({
            name: selectedItem.name,
            amount: amount,
          })
          playerInventory.textContent = `${selectedPlayer.inventory.length} itens`
        }
      } else {
        showNotification({
          title: "Erro",
          message: `${result.error || "Falha ao dar item"}`,
          type: "error",
        })
      }
    } catch (err) {
      console.error("Erro ao dar item:", err)
      giveItemBtn.disabled = false
      giveItemBtn.innerHTML = '<i class="fas fa-gift"></i> Dar Item'
      showNotification({
        title: "Erro",
        message: "Erro ao tentar dar o item",
        type: "error",
      })
    }
  }

  // Funções de tema
  function loadThemePreference() {
    const savedTheme = localStorage.getItem("vrp-admin-theme")
    if (savedTheme === "light") {
      setLightTheme()
    } else {
      setDarkTheme()
    }
  }

  function toggleTheme() {
    if (isDarkTheme) {
      setLightTheme()
    } else {
      setDarkTheme()
    }
  }

  function setDarkTheme() {
    document.body.classList.remove("light-theme")
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'
    isDarkTheme = true
    localStorage.setItem("vrp-admin-theme", "dark")
  }

  function setLightTheme() {
    document.body.classList.add("light-theme")
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'
    isDarkTheme = false
    localStorage.setItem("vrp-admin-theme", "light")
  }

  // Funções utilitárias
  async function handleApiResponse(response) {
    try {
      const text = await response.text()
      return text ? JSON.parse(text) : {}
    } catch (error) {
      console.error("Erro ao processar resposta:", error)
      return { success: false, error: "Erro ao processar resposta do servidor" }
    }
  }

  function showNotification({ title, message, type = "info", duration = 5000 }) {
    const notification = document.createElement("div")
    notification.className = `notification ${type}`

    let icon
    switch (type) {
      case "success":
        icon = "check-circle"
        break
      case "error":
        icon = "times-circle"
        break
      case "warning":
        icon = "exclamation-triangle"
        break
      default:
        icon = "info-circle"
    }

    notification.innerHTML = `
      <i class="fas fa-${icon} fa-lg"></i>
      <div class="notification-content">
        ${title ? `<div class="notification-title">${title}</div>` : ""}
        <div class="notification-message">${message}</div>
      </div>
      <button class="notification-close">
        <i class="fas fa-times"></i>
      </button>
    `

    notificationsContainer.appendChild(notification)

    // Adiciona evento de clique para fechar
    const closeBtn = notification.querySelector(".notification-close")
    closeBtn.addEventListener("click", () => {
      notification.style.opacity = "0"
      setTimeout(() => notification.remove(), 300)
    })

    // Remove a notificação após o tempo definido
    setTimeout(() => {
      notification.style.opacity = "0"
      setTimeout(() => notification.remove(), 300)
    }, duration)
  }

  // Eventos NUI
  window.addEventListener("message", (event) => {
    const data = event.data

    if (data.action === "toggle") {
      document.body.style.display = data.show ? "block" : "none"
      SetNuiFocus(data.show, data.show)

      if (data.show) {
        renderItems()
        if (data.playerId) {
          playerIdInput.value = data.playerId
          searchPlayer()
        }
      }
    }

    if (data.action === "updateItems") {
      if (data.items) {
        items.length = 0
        items.push(...data.items)
        renderItems()
      }
    }

    if (data.action === "updateVehicles") {
      if (data.vehicles) {
        vehicles.length = 0
        vehicles.push(...data.vehicles)
        renderVehicles()
      }
    }

    if (data.action === "updateLocations") {
      if (data.locations) {
        locations.length = 0
        locations.push(...data.locations)
        renderLocations()
      }
    }

    if (data.action === "updatePlayer") {
      if (data.player) {
        selectedPlayer = data.player
        showPlayerInfo(data.player)
      }
    }
  })
})

// Funções globais
async function fecharPainel() {
  try {
    document.body.style.display = "none"
    SetNuiFocus(false, false)

    await Promise.race([
      fetch(`https://painel_adm/fecharPainel`, { method: "POST" }),
      new Promise((resolve) => setTimeout(resolve, 1000)), // Timeout de segurança
    ])

    SetNuiFocus(false, false) // Garantia extra
  } catch (err) {
    console.error("Erro ao fechar painel:", err)
  }
}

function SetNuiFocus(hasFocus, hasCursor) {
  try {
    if (typeof window.invokeNative === "function") {
      window.invokeNative("focus", hasFocus)
      window.invokeNative("setCursorVisibility", hasCursor)

      // Fallback para algumas versões do FiveM
      if (!hasFocus) {
        setTimeout(() => {
          window.invokeNative("setCursorVisibility", false)
          window.invokeNative("focus", false)
        }, 50)
      }
    }
  } catch (e) {
    console.error("Erro ao controlar cursor:", e)
  }
}

// Fechar com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.body.style.display !== "none") {
    fecharPainel()
  }
})
