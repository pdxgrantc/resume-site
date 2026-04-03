import { createFileRoute } from '@tanstack/react-router'
import { PageWrapper } from '@/components/PageWrapper'

export const Route = createFileRoute('/about-me_/server-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageWrapper>
      <div className="">
        <div className="prose">
          <h1>Home Server Management</h1>
          <p>
            My home server environment is managed using Proxmox as the primary
            hypervisor, which serves as the central platform for me to explore
            virtualization, resource allocation, and system monitoring. Proxmox
            allows me to host multiple services each isolated into dedicated
            virtual machines or containers.
          </p>
          <p>
            The server hosts several purpose-built virtual machines. A Jellyfin
            VM is used for self-hosted media streaming, providing local control
            over media libraries and client access across devices on my local
            network. Remote access to the home network is handled through an
            OpenVPN virtual machine, enabling me to establish secure connections
            to my home network. I have a NAS (network attached storage) server
            providing a space for media, personal storage, and backups
            accessible to of my computers. This is hosted on dedicated VM
            running TrueNAS, which manages a ZFS RAID-Z1 storage pool shared
            over SMB. This configuration provides redundancy against single-disk
            failure, supports snapshots, and allows other VMs and computers to
            securely to access centralized storage reliably.
          </p>
          <p>
            In addition to these services, the server includes a dedicated
            virtual machine for running Docker containers. Currently I have an
            Immich instance running allowing me to automatically store and
            catalog my photos. By containerizing services
            like Immich, the system benefits from simplified updates, easy deployment,
            portability, and efficient resource usage. I have attempted to setup my home server
            to emphasize flexibility, service isolation, data integrity while allowing me to keep
            long-term maintainability.
          </p>
        </div>
      </div>
    </PageWrapper>
  )
}
