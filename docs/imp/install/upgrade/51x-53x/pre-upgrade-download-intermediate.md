# Downloading and staging files for intermediate upgrades

To perform this procedure, you need:

-   A workstation with internet access.
-   Permission to download files from
    [delivery.zenoss.io](https://delivery.zenoss.io){.external-link}.
    To request permission, file a ticket at the [Zenoss Support](https://support.zenoss.com/){.external-link} site.
-   A secure network copy program.

Follow these steps:

1.  In a web browser, navigate to the download site, and then log in.
    The download site is
    [delivery.zenoss.io](https://delivery.zenoss.io){.external-link}.

2.  Download the following files:
    -   `install-zenoss-impact_5.3_5.3.4.0.1_34.run`
    -   `ZenPacks.zenoss.ImpactServer-5.3.4.0.1-75-py2.7.egg`
    -   `ZenPacks.zenoss.Impact-5.3.4.0.0-py2.7.egg`

3.  Use a secure copy program to copy the files to the Control
    Center master host.

4.  Log in to the Control Center master host as root, or as a user with
    superuser privileges.

5.  Stage the files in `/tmp`.
    1.  Create a directory in `/tmp` for the files.
        The directory must be local (not mounted) and must be readable,
        writable, and executable by all users. For example,
        `/tmp/impact`.

        ```sh
        mkdir /tmp/impact
        ```

    2.  Copy or move the downloaded files to `/tmp/impact`.

    3.  Change the file permissions.
        The files must have the same permissions as their parent
        directory.

        ```sh
        chmod -R 777 /tmp/impact
        ```

6.  Install the image.

    1.  Change directory to the location where the image file is
        stored.
        For example, `/tmp/impact`:

        ```sh
        cd /tmp/impact
        ```

    2.  Install the image.

        ```sh
        yes | ./install-zenoss-impact_5.3_5.3.4.0.1_34.run
        ```


