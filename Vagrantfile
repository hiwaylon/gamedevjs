# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "ubuntu/trusty64"

  # The url from where the 'config.vm.box' box will be fetched if it
  # doesn't already exist on the user's system.
  config.vm.box_url = "ubuntu/trusty64"

  config.vm.network "forwarded_port", guest: 8000, host: 8000
  config.vm.network "forwarded_port", guest: 8888, host: 8888
  config.vm.network "forwarded_port", guest: 9876, host: 9876

  config.vm.provision "ansible" do |ansible|
    ansible.sudo = true
    ansible.verbose = "v"
    ansible.playbook = "provisioning/gamedevjs.yaml"
    # ansible.host_key_checking = false
  end
end
