


# create the FlexGroup
New-NcVol -VserverContext $svm -Name $volName -FlexGroupVolume -AggregateList $aggrList -AggregateMultiplier 2 -Size $volSize

# disable snapshots
Update-NcVol -Query @{ vserver = $svm; name = $volName } -Attributes @{ VolumeSnapshotAttributes = @{ SnapshotPolicy = "none" } }

$vol = Get-NcVol -Vserver $svm -Name $volName

# remove any snaps which have been created
$vol | Get-NcSnapshot | Remove-NcSnapshot -Confirm:$false

# turn on dedupe
$vol | Enable-NcSis | Start-NcSis

# disable fractional reserve
$vol | Set-NcVolOption -Key fractional_reserve -Value 0

# disable snap reserve
$vol | Set-NcSnapshotReserve -Percentage 0

# thin provision the volume
$vol | Set-NcVolOption -Key guarantee -Value none
