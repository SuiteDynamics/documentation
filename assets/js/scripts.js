var open = false;
var sidenavFolderExpandedContent = {};
var isSideNavAbsoute = false;
if (window.innerWidth < 600) {
    var sidenavElmt = document.getElementById("sidenav");
    sidenavElmt.style.position = "absolute";
    sidenavElmt.style.overflowY = "scroll";
    isSideNavAbsoute = true;
    var sidenavBackground = document.getElementById("sidenav-back");
    sidenavBackground.addEventListener('transitionend', () => {
        if (open == false) {
            sidenavBackground.style.display = "none";
        }
    });
    sidenavBackground.onclick = () => ShowHideSidenav();
}
if (window.innerWidth < 800) {
    closeNav();
} else {
    openNav();
}

function ShowHideSidenav() {
    if (open) {
        closeNav();
    } else {
        openNav();
    }
}

function openNav() {
    open = true;
    if (isSideNavAbsoute) {
        var sidenavBackground = document.getElementById("sidenav-back");
        sidenavBackground.style.display = "block";
        sidenavBackground.style.opacity = 0.4;
    }
    var sidenav = document.getElementById("sidenav");
    sidenav.style.width = Math.min(300, screen.width) + "px";
    document.getElementById("sidenav-content").style.width = Math.min(300, screen.width) + "px";
}

function closeNav() {
    open = false;
    if (isSideNavAbsoute) {
        var sidenavBackground = document.getElementById("sidenav-back");
        sidenavBackground.style.opacity = 0;
    }
    var sidenav = document.getElementById("sidenav");
    sidenav.style.width = "0";
    document.getElementById("sidenav-content").style.width = Math.min(300, screen.width) + "px";
}

function toggleDropDown(contentId, upArrowId, downArrowId) {
    var el = document.getElementById(contentId);
    if (sidenavFolderExpandedContent[contentId]) {
        document.getElementById(upArrowId).style.display = "none";
        document.getElementById(downArrowId).style.display = "inline-block";
        sidenavFolderExpandedContent[contentId] = false;
        el.style.height = el.scrollHeight + "px";
        setTimeout(() => {
            el.style.height = "0px";
        }, 10);
    } else {
        document.getElementById(upArrowId).style.display = "inline-block";
        document.getElementById(downArrowId).style.display = "none";
        sidenavFolderExpandedContent[contentId] = true;
        el.style.height = el.scrollHeight + "px";
    }
}

$('#sidenav-toggle-btn').click(function(e) {
	e.preventDefault();
	ShowHideSidenav();
});


const menuItems = [
	{
		'name': 'Contents',
		'local': '/index.html',
		'netsuite': 'https://7050356.app.netsuite.com/core/media/media.nl?id=2764&c=7050356&h=XCpUY82BNPy70Rtif5Ed7UZSFgDYfatBeAiSwwgu2ySAAzmG&_xt=.html'
	},
	{
		'name': 'Analytics',
		'children': [
			{
				'name': 'Klaviyo',
				'local': '/analytics/klaviyo.html',
				'netsuite': 'https://7050356.app.netsuite.com/core/media/media.nl?id=2766&c=7050356&h=ggOT5p-wH6Zka2REvle5W9V2HDEkR7V81QyUWr9YA0sMJ5bt&_xt=.html',
			},
			{
				'name': 'Google',
				'local': '/analytics/google.html',
				'netsuite': 'https://7050356.app.netsuite.com/core/media/media.nl?id=2765&c=7050356&h=HjQNFNwgXJn8z5RS12FQFqZlgZApGGDVVmDYpZVWQgQQnI4u&_xt=.html',
			}
		]
	},
	{
		'name': 'Netsuite',
		'children': [
			{
				'name': 'Social Feeds',
				'local': '/netsuite/social-feeds.html',
				'netsuite': 'https://7050356.app.netsuite.com/core/media/media.nl?id=2772&c=7050356&h=J3g2nYpS0UvN0JKb2XVdfWQX4IWPYv0vpTbEdgRna5bzygdg&_xt=.html',
			}
		]
	},
	{
		'name': 'Example Pages',
		'children': [
			{
				'name': 'Typography',
				'local': '/examples/typography.html',
				'netsuite': 'https://7050356.app.netsuite.com/core/media/media.nl?id=2771&c=7050356&h=ViYIwwc5jDLVM5h5WRRUB7SHWjx1iXlmED5-8bs0CRjCbZTH&mv=ktymxky8&_xt=.html&fcts=20210924102538&whence=',
			},
			{
				'name': 'Tables',
				'local': '/examples/tables.html',
				'netsuite': 'https://7050356.app.netsuite.com/core/media/media.nl?id=2769&c=7050356&h=XRrpeFTv3Z_y4DIeQpAI3eyjjbea1kD1dxSJoweXhskYlTjy&mv=ktymxky8&_xt=.html&fcts=20210924102538&whence=',
			},
			{
				'name': 'Code Blocks',
				'local': '/examples/codeblocks.html',
				'netsuite': 'https://7050356.app.netsuite.com/core/media/media.nl?id=2768&c=7050356&h=Gd3FOK98Ql4ojQLR1shaom0H7ux2HjoBN_apQZt7gNLoCdOn&mv=ktymxk6g&_xt=.html&fcts=20210924102537&whence=',
			},
			{
				'name': 'Blockquotes',
				'local': '/examples/blockquotes.html',
				'netsuite': 'https://7050356.app.netsuite.com/core/media/media.nl?id=2767&c=7050356&h=ZXWIVwpdfSoTsgdTfe3S85JS13nLVXowszp3L5eilcWUp25_&mv=ktymxk6g&_xt=.html&fcts=20210924102537&whence=',
			}
		]
	}
	
]


function returnUrl(url, item) {
	if(url) {
		return item.netsuite;
	} else {
		return item.local;
	}
}

function buildMenu(url) {
	var menuList = '';
	$.each(menuItems, function(index, item) { 
		if(!("children" in item)) {
		    menuList = menuList + '<li><a href="' + returnUrl(url, item) + '">' + item.name + '</a></li>';
		} else {
			menuList = menuList + '<li><a class="toggle_children">' + item.name + '</a>';
			menuList = menuList + '<ul class="child-list">';
			$.each(item.children, function(index, item) { 
				menuList = menuList + '<li><a href="' + returnUrl(url, item) + '">' + item.name + '</a></li>';
			})
			menuList = menuList + '</ul></li>';
		}
		
	});
	$('#menuParent').append(menuList);
}



$(document).ready(function () {
	var url = window.location.href;
    if(url.includes('app.netsuite.com')) {
        buildMenu(true);
    } else {
    	buildMenu(false);
    }

	$('.toggle_children').click(function(e) {
		e.preventDefault();
		$(this).closest('li').toggleClass('open');
	});

});


