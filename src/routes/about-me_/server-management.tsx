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
          <h1>Server Management Experience</h1>
          <p>
            My home server environment is managed using Proxmox as the primary
            hypervisor, which serves as the central platform for virtualization,
            resource allocation, and system monitoring. Proxmox allows multiple
            services to be isolated into dedicated virtual machines, improving
            reliability, security, and maintainability while making it easier to
            manage updates and troubleshoot individual components without
            affecting the entire system.
          </p>
          <p>
            The server hosts several purpose-built virtual machines. A Jellyfin
            VM is used for self-hosted media streaming, providing local control
            over media libraries and client access across devices. Remote access
            to the home network is handled through an OpenVPN virtual machine,
            enabling secure connections for management and file access while
            away from the local network. Storage services are provided by a
            TrueNAS virtual machine, which manages a ZFS RAID-Z1 storage pool
            shared over SMB. This configuration provides redundancy against
            single-disk failure, supports snapshots, and allows multiple systems
            on the network to access centralized storage reliably.
          </p>
          <p>
            In addition to these services, the server includes a dedicated
            virtual machine for running Docker containers. This VM is used to
            deploy and manage containerized applications, allowing rapid
            experimentation and clean separation from core infrastructure
            services. One of the primary containers hosted in this environment
            is Immich, which is used for self-hosted photo management and
            backup. By containerizing services like Immich, the system benefits
            from simplified updates, portability, and efficient resource usage.
            Overall, this home server setup emphasizes flexibility, service
            isolation, data integrity, and long-term maintainability while
            supporting a wide range of personal infrastructure needs.
          </p>
        </div>
      </div>
    </PageWrapper>
  )
}
