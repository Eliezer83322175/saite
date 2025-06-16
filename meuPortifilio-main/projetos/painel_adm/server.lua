RegisterServerEvent('painel_adm:teleportToLocation')
AddEventHandler('painel_adm:teleportToLocation', function(locationData)
    local src = source
    TriggerClientEvent('painel_adm:clientTeleport', src, locationData)
end)

