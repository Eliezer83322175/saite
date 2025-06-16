--================================================
------------SPAWNA CARRO
-- Escuta a NUI callback que envia o nome do veículo
RegisterNUICallback("spawnVehicle", function(data, cb)
    local vehicleName = data.vehicleName
    if not vehicleName or type(vehicleName) ~= "string" then
        print("[ADMIN] Invalid vehicle name received")
        return cb({ success = false, error = "Invalid vehicle name" })	
    end
    
    print("[ADMIN] Spawning vehicle:", vehicleName)
    TriggerEvent('spawnarveiculopppainel', vehicleName)
	SetNuiFocus(false,false)
    cb({ success = true })
end)

-- Escuta o evento do server para spawnar o veículo
RegisterNetEvent('spawnarveiculopppainel')
AddEventHandler('spawnarveiculopppainel',function(name)
	local mhash = GetHashKey(name)
	while not HasModelLoaded(mhash) do
		RequestModel(mhash)
		Citizen.Wait(10)
	end

	if HasModelLoaded(mhash) then
		local ped = PlayerPedId()
		local nveh = CreateVehicle(mhash,GetEntityCoords(ped),GetEntityHeading(ped),true,true)
		SetVehicleNumberPlateText(nveh,188511)

		SetVehicleOnGroundProperly(nveh)
		TaskWarpPedIntoVehicle(ped,nveh,-1)

		SetModelAsNoLongerNeeded(mhash)
	end
end)

RegisterCommand("painel", function()
    SetNuiFocus(true, true)
    SendNUIMessage({ action = "toggle", show = true })
end)

RegisterNUICallback("fecharPainel", function(_, cb)
    SetNuiFocus(false, false)
    SendNUIMessage({ action = "toggle", show = false })
    cb({})
end)


--================================================
--==================TP PARA LOCAIS================
RegisterNetEvent('painel_adm:clientTeleport')
AddEventHandler('painel_adm:clientTeleport', function(locationData)
    TeleportToLocation(locationData)
end)

-- Função para teleportar o jogador para uma localização específica
function TeleportToLocation(locationData)
    local playerPed = PlayerPedId()
    
    -- Verifica se as coordenadas foram fornecidas corretamente
    if not locationData or not locationData.coords or not locationData.coords.x then
        return
    end
    
    -- Extrai as coordenadas
    local x, y, z = locationData.coords.x, locationData.coords.y, locationData.coords.z
    
    -- Verifica se há um heading específico (opcional)
    local heading = locationData.coords.h or 0.0
    
    -- Teleporta o jogador
    DoScreenFadeOut(500)
    while not IsScreenFadedOut() do
        Wait(0)
    end
    
    -- Verifica se o local está dentro de um interior (necessário para alguns casos)
    if locationData.interiorId then
        LoadInterior(locationData.interiorId)
        while not IsInteriorReady(locationData.interiorId) do
            Wait(0)
        end
    end
    
    -- Define a posição do jogador
    SetEntityCoords(playerPed, x, y, z, false, false, false, false)
    SetEntityHeading(playerPed, heading)
    
    -- Garante que o jogador não fique preso no ar ou em objetos
    Wait(100)
    SetPedCoordsKeepVehicle(playerPed, x, y, z)
    
    -- Fade in da tela
    DoScreenFadeIn(500)
end

-- Handler para receber o comando do NUI
RegisterNUICallback('teleportToLocation', function(data, cb)
    TeleportToLocation(data)
    cb({success = true})
end)
--==============================================
--==============================================
--==============================================
