-- This will automatically show the NUI when player joins

RegisterNetEvent('femboy_welcome:show')
AddEventHandler('femboy_welcome:show', function()
    SetNuiFocus(true, true)
    SendNUIMessage({ action = "show" })
end)

-- Close NUI when "Enter Server" is clicked
RegisterNUICallback('enter', function(data, cb)
    SetNuiFocus(false, false)
    SendNUIMessage({ action = "hide" })
    cb('ok')
end)

-- Trigger on player spawn
AddEventHandler('playerSpawned', function()
    TriggerEvent('femboy_welcome:show')
end)